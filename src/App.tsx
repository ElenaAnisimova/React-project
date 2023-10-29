import './App.css';
import React from 'react';
// import { SearchInput } from './components/UI/SearchInput';
// import { SearchItem } from './components/UI/SearchItem';

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

  // handleSearch = (value1: string) => {
  //   this.setState({ value: value1 });
  // };

  async request(e: { preventDefault: () => void }, query) {
    e.preventDefault();
    const request: Response = await fetch(
      `https://swapi.dev/api/people/?search=${query}`
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
    // return results;
  }

  render() {
    // const searchResults = this.request;
    const { searchResults } = this.state;
    return (
      <div>
        {/* <button onClick={() => this.handleSearch(this.state.value)}>
          Increment
        </button> */}
        {/* <p>You are {this.state.value}.</p> */}
        {/* <SearchInput></SearchInput> */}
        {/* {results.map((name, info) => (
        <SearchItem name={name} info={info} key={post.id} />
      ))} */}
        {/* <SearchItem info={this.state.value} name="kkk"></SearchItem> */}
        <form>
          <input
            type="text"
            className="search-input"
            // value={this.state.searchTerm}
            // onChange={this.handleChange}
            placeholder="Enter search query"
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
