import './App.css';
import React, { useEffect, useState } from 'react';
import { SearchResult } from './types/types';
import Loader from './components/Loader';
import { APILord } from './ulits/api';
// import Button from './components/Button';
// import { getTotalCount } from './ulits/pages';

export function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setsearchResults] = useState<SearchResult[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [limit] = useState(10);

  const [currentPage] = useState(1);

  // useEffect(() => {
  //   const savedQuery = localStorage.getItem('searchQuery');
  //   if (savedQuery) {
  //     setNewData(savedQuery);
  //   } else setNewData(query);
  // }, []);

  useEffect(() => {
    if (hasError) {
      throw new Error('oh no! It is an Error!');
    }
  }, [hasError]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  async function setNewData(
    searchStr: string,
    limit: number,
    currentPage: number
  ) {
    setIsSearchLoading(true);
    try {
      const responseJSON = await APILord(searchStr, limit, currentPage);
      const resultsJSON = responseJSON.docs;
      const totalcountJSON = responseJSON.total;
      console.log(resultsJSON);
      console.log(totalcountJSON);

      const results = resultsJSON.map((item: SearchResult) => ({
        name: item.name,
        height: item.height,
        race: item.race,
        birth: item.birth,
        spouse: item.spouse,
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
    setNewData(query, limit, currentPage);
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
        {/* <button onClick={sendRequest} type="button">
          Search
        </button> */}
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
              <p>Race: {result.race}</p>
              <p>Birth year: {result.birth}</p>
              <p>Height: {result.height}</p>
              <p>Spouse: {result.spouse}</p>
            </div>
          ))
        )}
      </div>
      <div className="pagination__wrapper"></div>
    </div>
  );
}

export default App;
