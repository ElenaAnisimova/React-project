import './App.css';
import React, { useEffect, useState } from 'react';
import { SearchResult } from './types/types';
import Loader from './components/Loader';
// import Button from './components/Button';

export function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setsearchResults] = useState<SearchResult[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
      setNewData(savedQuery);
    } else setNewData(query);
  }, []);

  useEffect(() => {
    if (hasError) {
      throw new Error('oh no! It is an Error!');
    }
  }, [hasError]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  async function setNewData(searchStr: string) {
    console.log(query);

    setIsSearchLoading(true);
    try {
      const request: Response = await fetch(
        `https://swapi.dev/api/people/?search=${searchStr.trim()}`
      );
      const requestJSON = await request.json();
      const resultsJSON = requestJSON.results;
      const results = resultsJSON.map((item: SearchResult) => ({
        name: item.name,
        height: item.height,
        hair_color: item.hair_color,
        eye_color: item.eye_color,
        birth_year: item.birth_year,
      }));
      setsearchResults(results);
      setIsSearchLoading(false);
    } catch (error) {
      console.log(error);
      setIsSearchLoading(false);
      setHasError(true);
    }
  }

  async function sendRequest() {
    setNewData(query);
    localStorage.setItem('searchQuery', query.trim());
  }

  function makeError() {
    setHasError(true);
    throw new Error('New Error');
  }

  return (
    <div>
      <form>
        <input
          type="text"
          className="search-input"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter Star Wars people themed search query"
        />
        <button onClick={sendRequest} type="button">
          Search
        </button>
        <button onClick={makeError} type="button">
          Try Error
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

export default App;
