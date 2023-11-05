import Loader from '../Loader';
import { SearchResultProps } from './SearchResultsTypes';

export default function SearchResults({
  isSearchLoading,
  searchResults,
}: SearchResultProps) {
  return (
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
  );
}
