import { DetailedSectionProps } from './DetailsSectionTypes';
import { CloseButton } from '../Buttons/CloseButton';

export default function DetailsSection({
  searchResult,
  closeDetails,
}: DetailedSectionProps) {
  return (
    <div className="background">
      <aside className="details">
        <CloseButton text="Close Details" closeDetails={closeDetails} />
        <div className="search-item__detailed">
          <h4>{searchResult.name}</h4>
          <p>Race: {searchResult.race}</p>
          <p>Birth year: {searchResult.birth}</p>
          <p>Height: {searchResult.height}</p>
          <p>Spouse: {searchResult.spouse}</p>
        </div>
      </aside>
    </div>
  );
}
