/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { SearchResultType } from '../components/SearchResults/SearchResultsTypes';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSearchParams, useNavigate } from 'react-router-dom';
import { APISearch, APICharacterID } from '../ulits/api';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import { placeholderText, currentItemIDInitial } from './SearchPageVariables';
import Pagination from '../components/Pagination/Pagination';
import ItemsSelect from '../components/ItemsPerPage//ItemsSelect';
import DetailsSection from '../components/DetailsSection/DetailsSection';

// TODO: MAKE ALERT ABOUT 429
// SAVE CURRENT PAGE TO ls

export function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchResults, setsearchResults] = useState<SearchResultType[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDetails, setOpenDetails] = useState(false);
  const [currentItemID, setCurrentItemID] = useState('');
  const [currentItem, setCurrentItem] =
    useState<SearchResultType>(currentItemIDInitial);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const savedQuery = localStorage.getItem('searchQuery');
  //   if (savedQuery) {
  //     setNewData(savedQuery);
  //   } else setNewData(query);
  // }, []);

  useEffect(() => {
    // navigate(`/results/${currentPage}`);
    setSearchResults(query, limit, currentPage);
  }, [currentPage, limit]);

  useEffect(() => {
    // navigate(`/results/${currentPage}`);
    setCharacterDetails();
  }, [currentItemID]);

  useEffect(() => {}, [currentItem]);

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
    // setNewData(query, limit, currentPage);
  }

  function changeItemsLimit(event: React.ChangeEvent<HTMLSelectElement>) {
    setLimit(Number(event.target.value));
    // setNewData(query, limit, currentPage);
  }
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (openDetails) {
      const className = (e.target as Element).className;
      if (className === 'background') {
        setOpenDetails(false);
      }
    }
  }
  async function setSearchResults(
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
      setsearchResults(results);
      setIsSearchLoading(false);
    } catch (error) {
      console.log(error);
      setIsSearchLoading(false);
      setHasError(true);
    }
  }

  async function setCharacterDetails() {
    setIsSearchLoading(true);
    try {
      const responseJSON = await APICharacterID(currentItemID);
      const resultsJSON = responseJSON.docs;
      const result = currentItemIDInitial;
      Object.assign(result, resultsJSON[0]);
      setCurrentItem(result);
      setIsSearchLoading(false);
    } catch (error) {
      console.log(error);
      setIsSearchLoading(false);
      setHasError(true);
    }
  }

  async function sendRequest() {
    setCurrentPage(1);
    setSearchResults(query, limit, currentPage);
    navigate('/results/1');
    localStorage.setItem('searchQuery', query.trim());
  }

  function showDetails(id: string) {
    setCurrentItemID(id);
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
      {openDetails && !isSearchLoading ? (
        <DetailsSection
          searchResult={currentItem}
          closeDetails={closeDetails}
        />
      ) : null}
    </div>
  );
}

export default SearchPage;
