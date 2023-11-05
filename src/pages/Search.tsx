import React, { useEffect, useState } from 'react';
import { SearchResultType } from '../components/SearchResults/SearchResultsTypes';

import { APILord } from '../ulits/api';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';

import Pagination from '../components/Pagination/Pagination';

export function Search() {
  const [query, setQuery] = useState('');
  const [searchResults, setsearchResults] = useState<SearchResultType[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

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

      const results = resultsJSON.map((item: SearchResultType) => ({
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
      <SearchBar
        className="search-input"
        type="text"
        query={query}
        placeholder="Enter Lord of the Rings characters themed search query"
        sendRequest={sendRequest}
        makeError={makeError}
        handleInput={handleInputChange}
      ></SearchBar>
      <SearchResults
        isSearchLoading={isSearchLoading}
        searchResults={searchResults}
      />
      <Pagination
        currentPage={currentPage}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default Search;
