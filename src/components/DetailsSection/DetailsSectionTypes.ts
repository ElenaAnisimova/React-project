import { SearchResultType } from '../SearchResults/SearchResultsTypes';

export type DetailedSectionProps = {
  searchResult: SearchResultType;
  closeDetails: () => void;
};
