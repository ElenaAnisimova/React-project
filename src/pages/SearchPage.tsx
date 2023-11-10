/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import { SearchResultType } from '../components/SearchResults/SearchResultsTypes';
import { useNavigate } from 'react-router-dom';
import { APISearch, APICharacterID } from '../ulits/api';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import { placeholderText, currentItemIDInitial } from './SearchPageVariables';
import Pagination from '../components/Pagination/Pagination';
import ItemsSelect from '../components/ItemsPerPage/ItemsSelect';
import DetailsSection from '../components/DetailsSection/DetailsSection';
import { SearchContext } from '../ulits/contexts/SearchContext';
import { LoadingContext } from '../ulits/contexts/LoadingContext';

export function SearchPage() {
  // const [query, setQuery] = useState('');
  const { query } = useContext(SearchContext);
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [areDetailsLoading, setAreDetailsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDetails, setOpenDetails] = useState(false);
  const [currentItemID, setCurrentItemID] = useState('');
  const [currentItem, setCurrentItem] =
    useState<SearchResultType>(currentItemIDInitial);
  const navigate = useNavigate();

  useEffect(() => {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery) {
      getSearchResults(savedQuery, limit, currentPage);
    } else getSearchResults(query, limit, currentPage);
  }, []);

  useEffect(() => {
    getSearchResults(query, limit, currentPage);
  }, [currentPage, limit]);

  useEffect(() => {
    setCharacterDetails();
  }, [currentItemID]);

  useEffect(() => {}, [currentItem]);

  useEffect(() => {
    if (hasError) {
      throw new Error('oh no! It is an Error!');
    }
  }, [hasError]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    // setQuery(event.target.value);
    event.preventDefault();
    console.log(123);
  }

  function changePage(page: number) {
    setCurrentPage(page);
    navigate(`/results/${page}`);
  }

  function changeItemsLimit(event: React.ChangeEvent<HTMLSelectElement>) {
    setLimit(Number(event.target.value));
  }
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (openDetails) {
      const className = (e.target as Element).className;
      if (className === 'background') {
        setOpenDetails(false);
      }
    }
  }
  async function getSearchResults(
    searchStr: string,
    limit: number,
    currentPage: number
  ) {
    setIsSearchLoading(true);
    try {
      const responseJSON = await APISearch(searchStr, limit, currentPage);
      const resultsJSON = responseJSON.docs;
      const totalPagesData = responseJSON.pages;
      setTotalPages(totalPagesData);

      const results = resultsJSON.map((item: SearchResultType) => ({
        name: item.name,
        height: item.height,
        race: item.race,
        birth: item.birth,
        spouse: item.spouse,
        _id: item._id,
      }));
      setSearchResults(results);
      setIsSearchLoading(false);
    } catch (error) {
      console.log(error);
      setIsSearchLoading(false);
      setHasError(true);
    }
  }

  async function setCharacterDetails() {
    setAreDetailsLoading(true);
    console.log(areDetailsLoading);

    try {
      const responseJSON = await APICharacterID(currentItemID);
      const resultsJSON = responseJSON.docs;
      const result = currentItemIDInitial;
      Object.assign(result, resultsJSON[0]);
      setCurrentItem(result);
      setAreDetailsLoading(false);
    } catch (error) {
      console.log(error);
      setAreDetailsLoading(false);
      setHasError(true);
    }
  }

  async function sendRequest() {
    setCurrentPage(1);
    getSearchResults(query, limit, currentPage);
    navigate('/results/1');
    localStorage.setItem('searchQuery', query.trim());
  }

  function showDetails(id: string) {
    setCurrentItemID(id);
    // setCharacterDetails();
    setOpenDetails(true);
  }

  function closeDetails() {
    setOpenDetails(false);
  }

  function makeError() {
    setHasError(true);
    throw new Error('New Error');
  }

  return (
    <LoadingContext.Provider
      value={{ areDetailsLoading, setAreDetailsLoading }}
    >
      <SearchContext.Provider value={{ query }}>
        <div onClick={handleClick}>
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
            showDetails={showDetails}
          />
          {isSearchLoading ? null : (
            <Pagination
              currentPage={currentPage}
              changePage={changePage}
              totalPages={totalPages}
            />
          )}
          {openDetails ? (
            <DetailsSection
              searchResult={currentItem}
              closeDetails={closeDetails}
            />
          ) : null}
        </div>
      </SearchContext.Provider>
    </LoadingContext.Provider>
  );
}

export default SearchPage;
