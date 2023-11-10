import { createContext } from 'react';
import { SearchResultType } from '../../components/SearchResults/SearchResultsTypes';
export type InitialSearchContextType = {
  query: string;
  // setQuery: React.Dispatch<React.SetStateAction<string>>;
};
export type InitialSearchResultsContextType = {
  searchResult: SearchResultType[];
};
// export const SearchContext = createContext<InitialSearchContextType>({
//   queryContext: '',
//   // setQuery: () => {},
// });
export const SearchContext = createContext<InitialSearchContextType>({
  query: '',
  // setQuery: () => {},
});

export const SearchResultsContext =
  createContext<InitialSearchResultsContextType>({
    searchResult: [],
    // setQuery: () => {},
  });
