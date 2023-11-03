import './App.css';
import React, { useEffect, useState } from 'react';
import { SearchResult } from './types/types';
import Loader from './components/Loader';
import { APILord } from './ulits/api';
// import Button from './components/Button';
import { getPagesNumbers } from './ulits/pages';

export function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setsearchResults] = useState<SearchResult[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesArr = getPagesNumbers(totalPages);
  // useEffect(() => {
  //   const savedQuery = localStorage.getItem('searchQuery');
  //   if (savedQuery) {
  //     setNewData(savedQuery);
  //   } else setNewData(query);
  // }, []);

  useEffect(() => {
    setNewData(query, limit, currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (hasError) {
      throw new Error('oh no! It is an Error!');
    }
  }, [hasError]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function changePage(page: number) {
    setCurrentPage(page);
    console.log(currentPage);
    // setNewData(query, limit, currentPage);
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
      const totalPagesData = responseJSON.pages;
      setTotalPages(totalPagesData);

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
      <div className="pagination__wrapper">
        {pagesArr.map((page) => (
          <button
            className={page === currentPage ? 'page page__current' : 'page'}
            key={page}
            type="button"
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
