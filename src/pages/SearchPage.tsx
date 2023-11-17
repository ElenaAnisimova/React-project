/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { SearchResultType } from '../components/SearchResults/SearchResultsTypes';
import { useNavigate } from 'react-router-dom';
import { APISearch, APICharacterID } from '../ulits/api';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import {
  placeholderText,
  currentItemIDInitial,
  DEFAULT_VALUES,
} from './SearchPageVariables';
import Pagination from '../components/Pagination/Pagination';
import ItemsSelect from '../components/ItemsPerPage/ItemsSelect';
import DetailsSection from '../components/DetailsSection/DetailsSection';
import { SearchResultsContext } from '../ulits/states/SearchContext';
import { LoadingContext } from '../ulits/states/LoadingContext';
import { useSelector } from 'react-redux';
import { RootState } from '../ulits/states/store';

export function SearchPage() {
  const query = useSelector((state: RootState) => state.search.query);
  const [searchResults, setSearchResults] = useState<SearchResultType[]>([]);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [areDetailsLoading, setAreDetailsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [totalPages, setTotalPages] = useState(
    DEFAULT_VALUES.DEFAULT_TOTAL_PAGES
  );
  const [limit, setLimit] = useState(DEFAULT_VALUES.DEFAULT_LIMIT);
  const [currentPage, setCurrentPage] = useState(
    DEFAULT_VALUES.DEFAULT_CURRENT_PAGE
  );
  const [openDetails, setOpenDetails] = useState(false);
  const [currentItemID, setCurrentItemID] = useState('');
  const [currentItem, setCurrentItem] =
    useState<SearchResultType>(currentItemIDInitial);
  const navigate = useNavigate();

  useEffect(() => {
    const savedQuery = localStorage.getItem('searchQuery');
    const queryString = savedQuery ? savedQuery : query;
    getSearchResults(queryString, limit, currentPage);
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

  function changePage(page: number) {
    setCurrentPage(page);
    navigate(`/results/${page}`);
  }

  function changeItemsLimit(event: React.ChangeEvent<HTMLSelectElement>) {
    setLimit(Number(event.target.value));
    setCurrentPage(1);
    navigate(`/results/${1}`);
  }

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (openDetails) {
      const className = (e.target as Element).className;
      if (className === 'background') {
        setOpenDetails(false);
        console.log(openDetails);
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
    } catch (error) {
      console.log(error);
      setHasError(true);
    } finally {
      setIsSearchLoading(false);
    }
  }

  async function setCharacterDetails() {
    setAreDetailsLoading(true);
    try {
      const responseJSON = await APICharacterID(currentItemID);
      const resultsJSON = responseJSON.docs;
      const result = currentItemIDInitial;
      Object.assign(result, resultsJSON[0]);
      setCurrentItem(result);
    } catch (error) {
      console.log(error);
      setHasError(true);
    } finally {
      setAreDetailsLoading(false);
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
    setOpenDetails(true);
  }

  function makeError() {
    setHasError(true);
    throw new Error('New Error');
  }

  return (
    <SearchResultsContext.Provider value={{ searchResults, currentItem }}>
      <LoadingContext.Provider
        value={{ areDetailsLoading, setAreDetailsLoading }}
      >
        <div onClick={handleClick}>
          <SearchBar
            className="search-input"
            type="text"
            query={query}
            placeholder={placeholderText}
            sendRequest={sendRequest}
            makeError={makeError}
          ></SearchBar>
          <ItemsSelect getValue={changeItemsLimit}></ItemsSelect>
          <SearchResults
            isSearchLoading={isSearchLoading}
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
            <DetailsSection closeDetails={() => setOpenDetails(false)} />
          ) : null}
        </div>
      </LoadingContext.Provider>
    </SearchResultsContext.Provider>
  );
}

export default SearchPage;
