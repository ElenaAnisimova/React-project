import Loader from '../Loader';
import { SearchResultProps } from './SearchResultsTypes';

export default function SearchResults({
  isSearchLoading,
  searchResults,
  showDetails,
}: SearchResultProps) {
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
            // id={result._id}
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
