import { useContext } from 'react';
import { DetailedSectionProps } from './DetailsSectionTypes';
import { CloseButton } from '../Buttons/CloseButton';
import DetailsLoader from '../Loaders/DetailsLoader';
import { LoadingContext } from '../../ulits/states/LoadingContext';
import { SearchResultsContext } from '../../ulits/states/SearchContext';

export default function DetailsSection({ closeDetails }: DetailedSectionProps) {
  const { areDetailsLoading } = useContext(LoadingContext);
  const { currentItem } = useContext(SearchResultsContext);
  return (
    <div className="background" data-testid="aside-details">
      <aside className="details">
        <CloseButton closeDetails={closeDetails}>Close Details</CloseButton>
        {areDetailsLoading ? (
          <div className="loader-wrapper">
            <DetailsLoader></DetailsLoader>
          </div>
        ) : (
          <div className="search-item__detailed">
            <h4>{currentItem.name}</h4>
            <p>Race: {currentItem.race}</p>
            <p>Birth year: {currentItem.birth}</p>
            <p>Height: {currentItem.height}</p>
            <p>Spouse: {currentItem.spouse}</p>
          </div>
        )}
      </aside>
    </div>
  );
}
