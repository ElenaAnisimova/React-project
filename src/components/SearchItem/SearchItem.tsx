import { SearchItemProps } from './SearchItemProps';

function SearchItem({
  showDetails,
  searchResults,
  key: index,
}: SearchItemProps) {
  return (
    <div
      className="search-item"
      key={index}
      onClick={() => showDetails(searchResults._id)}
    >
      <h4>{searchResults.name}</h4>
      <p>Race: {searchResults.race}</p>
      <p>Birth year: {searchResults.birth}</p>
      <p>Height: {searchResults.height}</p>
      <p>Spouse: {searchResults.spouse}</p>
    </div>
  );
}

export default SearchItem;
