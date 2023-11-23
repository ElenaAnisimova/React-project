import { SearchResultType } from '../SearchResults/SearchResultsTypes';

export type SearchItemProps = {
  searchResults: SearchResultType;
  showDetails: (id: string) => void;
  key: number;
};
