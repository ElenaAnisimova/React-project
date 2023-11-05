import React, { useEffect, useState } from 'react';
import { SearchResultType } from '../components/SearchResults/SearchResultsTypes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSearchParams, useNavigate } from 'react-router-dom';
import { APILord } from '../ulits/api';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import { placeholderText } from './SearchPageVariables';
import Pagination from '../components/Pagination/Pagination';
import ItemsSelect from '../components/ItemsPerPage/ItemsSelect';

export function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchResults, setsearchResults] = useState<SearchResultType[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const savedQuery = localStorage.getItem('searchQuery');
  //   if (savedQuery) {
  //     setNewData(savedQuery);
  //   } else setNewData(query);
  // }, []);

  useEffect(() => {
    // navigate(`/results/${currentPage}`);
    setNewData(query, limit, currentPage);
  }, [currentPage, limit]);

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
    navigate(`/results/${page}`);
    console.log(currentPage);
    // setNewData(query, limit, currentPage);
  }

  function changeItemsLimit(event: React.ChangeEvent<HTMLSelectElement>) {
    setLimit(Number(event.target.value));
    // setNewData(query, limit, currentPage);
    console.log(limit);
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
    setCurrentPage(1);
    setNewData(query, limit, currentPage);
    navigate('/results/1');
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
        placeholder={placeholderText}
        sendRequest={sendRequest}
        makeError={makeError}
        handleInput={handleInputChange}
      ></SearchBar>
      <ItemsSelect getValue={changeItemsLimit}></ItemsSelect>
      <SearchResults
        isSearchLoading={isSearchLoading}
        searchResults={searchResults}
      />
      {isSearchLoading ? null : (
        <Pagination
          currentPage={currentPage}
          changePage={changePage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}

export default SearchPage;
