import './App.css';
import React from 'react';
// import { SearchInput } from './components/UI/SearchInput';
// import { SearchItem } from './components/UI/SearchItem';
// TODO: ошибки через try catch

type Props = {
  value: string;
};

type SearchResult = {
  name: string;
  height: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
};

type AppState = {
  query: string;
  searchResults: SearchResult[];
};

export class App extends React.Component<Props, AppState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      query: '',
      searchResults: [],
    };
    this.request = this.request.bind(this);
  }

  async componentDidMount(): Promise<void> {
    if (!localStorage.getItem('searchQuery')) {
      const request: Response = await fetch(`https://swapi.dev/api/people/`);
      const requestJSON = await request.json();
      const resultsJSON = requestJSON.results;
      const results: SearchResult[] = resultsJSON.map((item: SearchResult) => ({
        name: item.name,
        height: item.height,
        hair_color: item.hair_color,
        eye_color: item.eye_color,
        birth_year: item.birth_year,
      }));
      this.setState({ searchResults: results });

      console.log(results);
    } else {
      const query = localStorage.getItem('searchQuery') as string;
      this.setState({ query });
      const request: Response = await fetch(`https://swapi.dev/api/people/`);
      const requestJSON = await request.json();
      const resultsJSON = requestJSON.results;
      const results: SearchResult[] = resultsJSON.map((item: SearchResult) => ({
        name: item.name,
        height: item.height,
        hair_color: item.hair_color,
        eye_color: item.eye_color,
        birth_year: item.birth_year,
      }));
      this.setState({ searchResults: results });
    }
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    this.setState({ query });
  };

  async request(e: { preventDefault: () => void }) {
    e.preventDefault();
    const { query } = this.state;
    const request: Response = await fetch(
      `https://swapi.dev/api/people/?search=${query.trim()}`
    );
    const requestJSON = await request.json();
    const resultsJSON = requestJSON.results;
    const results: SearchResult[] = resultsJSON.map((item: SearchResult) => ({
      name: item.name,
      height: item.height,
      hair_color: item.hair_color,
      eye_color: item.eye_color,
      birth_year: item.birth_year,
    }));

    console.log(results);
    this.setState({ searchResults: results });
    localStorage.setItem('searchQuery', query.trim());
  }

  render() {
    const { searchResults, query } = this.state;
    return (
      <div>
        {/* <SearchInput></SearchInput> */}
        {/* <SearchItem info={this.state.value} name="kkk"></SearchItem> */}
        <form>
          <input
            type="text"
            className="search-input"
            value={query}
            onChange={this.handleInputChange}
            placeholder="Enter Star Wars people themed search query"
          />
          <button onClick={this.request} type="submit">
            Search
          </button>
        </form>
        <div className="wrapper">
          {searchResults.map((result, index: number) => (
            <div className="search-item" key={index}>
              <h4>{result.name}</h4>
              <p>Birth year: {result.birth_year}</p>
              <p>Height: {result.height}</p>
              <p>Hair color: {result.hair_color}</p>
              <p>Eye color: {result.eye_color}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
