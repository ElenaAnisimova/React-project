import Loader from '../Loaders/Loader';
import { useContext } from 'react';
import { SearchResultProps } from './SearchResultsTypes';
import { SearchResultsContext } from '../../ulits/states/SearchContext';

export default function SearchResults({
  isSearchLoading,
  showDetails,
}: SearchResultProps) {
  const { searchResults } = useContext(SearchResultsContext);
  return (
    <div className="wrapper">
      {isSearchLoading ? (
        <div className="loader-wrapper">
          <Loader></Loader>
        </div>
      ) : (
        searchResults.map((result, index: number) => (
          <div
            className="search-item"
            key={index}
            onClick={() => showDetails(result._id)}
          >
            <h4>{result.name}</h4>
            <p>Race: {result.race}</p>
            <p>Birth year: {result.birth}</p>
            <p>Height: {result.height}</p>
            <p>Spouse: {result.spouse}</p>
          </div>
        ))
      )}
    </div>
  );
}
