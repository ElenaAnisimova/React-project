import { useContext } from 'react';
import { DetailedSectionProps } from './DetailsSectionTypes';
import { CloseButton } from '../Buttons/CloseButton';
import DetailsLoader from '../Loaders/DetailsLoader';
import { LoadingContext } from '../../ulits/contexts/LoadingContext';

export default function DetailsSection({
  searchResult,
  closeDetails,
}: DetailedSectionProps) {
  const { areDetailsLoading } = useContext(LoadingContext);
  return (
    <div className="background">
      <aside className="details">
        <CloseButton text="Close Details" closeDetails={closeDetails} />
        {areDetailsLoading ? (
          <div className="loader-wrapper">
            <DetailsLoader></DetailsLoader>
          </div>
        ) : (
          <div className="search-item__detailed">
            <h4>{searchResult.name}</h4>
            <p>Race: {searchResult.race}</p>
            <p>Birth year: {searchResult.birth}</p>
            <p>Height: {searchResult.height}</p>
            <p>Spouse: {searchResult.spouse}</p>
          </div>
        )}
      </aside>
    </div>
  );
}
