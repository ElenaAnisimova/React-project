import './App.css';
import React from 'react';
import { AppState, Props, SearchResult } from './types/types';
import Loader from './components/Loader';
// import { SearchInput } from './components/UI/SearchInput';
// import { SearchItem } from './components/UI/SearchItem';
// TODO: ошибки через try catch

export class App extends React.Component<Props, AppState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      query: '',
      searchResults: [],
      isSearchLoading: false,
    };
    this.sendRequest = this.sendRequest.bind(this);
  }

  async componentDidMount(): Promise<void> {
    if (!localStorage.getItem('searchQuery')) {
      const { query } = this.state;
      this.setState({ query });
      this.setNewData();
    } else {
      const query = localStorage.getItem('searchQuery') as string;
      this.setState({ query });
      this.setNewData();
    }
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    this.setState({ query });
  };

  async setNewData() {
    const { query } = this.state;
    this.setState({ isSearchLoading: true });
    try {
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
      this.setState({ searchResults: results, isSearchLoading: false });
    } catch (error) {}
  }

  async sendRequest(e: { preventDefault: () => void }) {
    e.preventDefault();
    const { query } = this.state;
    this.setNewData();
    localStorage.setItem('searchQuery', query.trim());
  }

  render() {
    const { searchResults, query, isSearchLoading } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            className="search-input"
            value={query}
            onChange={this.handleInputChange}
            placeholder="Enter Star Wars people themed search query"
          />
          <button onClick={this.sendRequest} type="submit">
            Search
          </button>
        </form>
        <div className="wrapper">
          {isSearchLoading ? (
            <div className="loader-wrapper">
              <Loader></Loader>
            </div>
          ) : (
            searchResults.map((result, index: number) => (
              <div className="search-item" key={index}>
                <h4>{result.name}</h4>
                <p>Birth year: {result.birth_year}</p>
                <p>Height: {result.height}</p>
                <p>Hair color: {result.hair_color}</p>
                <p>Eye color: {result.eye_color}</p>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default App;
