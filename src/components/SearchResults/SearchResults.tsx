/* eslint-disable @typescript-eslint/no-unused-vars */
import Loader from '../Loaders/Loader';
// import { useContext } from 'react';
import { SearchResultProps } from './SearchResultsTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../ulits/states/store';
import { dataAPI } from '../../ulits/api';
// import { SearchResultsContext } from '../../ulits/states/SearchContext';

export default function SearchResults() {
  //   {
  //   // isSearchLoading, // showDetails,
  // }: SearchResultProps
  // const { searchResults } = useContext(SearchResultsContext);
  const query = useSelector((state: RootState) => state.search.query);
  const limit = useSelector((state: RootState) => state.limit.limit);
  const { data, isLoading } = dataAPI.useFetchAllCharactersQuery({
    searchStr: query,
    limit,
    page: 1,
  });
  return (
    <div className="wrapper">
      {isLoading ? (
        <Loader />
      ) : (
        data &&
        data.docs.map((result, index: number) => (
          <div
            className="search-item"
            key={index}
            // onClick={() => showDetails(result._id)}
          >
            <h4>{result.name}</h4>
            <p>Race: {result.race}</p>
            <p>Birth year: {result.birth}</p>
            <p>Height: {result.height}</p>
            <p>Spouse: {result.spouse}</p>
          </div>
        ))
      )}

      {/* {isSearchLoading ? (
        <div className="loader-wrapper">
          <Loader></Loader>
        </div>
      ) : (
        searchResults.map((result, index: number) => (
          <div
            className="search-item"
            key={index}
            // onClick={() => showDetails(result._id)}
          >
            <h4>{result.name}</h4>
            <p>Race: {result.race}</p>
            <p>Birth year: {result.birth}</p>
            <p>Height: {result.height}</p>
            <p>Spouse: {result.spouse}</p>
          </div>
        ))
      )} */}
    </div>
  );
}
