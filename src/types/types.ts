import { SearchResultType } from '../components/SearchResults/SearchResultsTypes';
export type AppState = {
  query: string;
  searchResults: SearchResultType[];
  isSearchLoading: boolean;
  hasError: boolean;
};
