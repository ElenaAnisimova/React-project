import { DetailedSectionProps } from './DetailsSectionTypes';

export default function DetailsSection({ searchResult }: DetailedSectionProps) {
  return (
    <aside className="details">
      <div className="search-item__detailed">
        <h4>{searchResult.name}</h4>
        <p>Race: {searchResult.race}</p>
        <p>Birth year: {searchResult.birth}</p>
        <p>Height: {searchResult.height}</p>
        <p>Spouse: {searchResult.spouse}</p>
      </div>
    </aside>
  );
}
