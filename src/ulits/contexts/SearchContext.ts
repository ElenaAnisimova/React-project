import { createContext } from 'react';
// import { SearchResultType } from '../../components/SearchResults/SearchResultsTypes';
type SearchContextType = {
  query: string;
  setQuery: (str: string) => void;
};

const defaultState = {
  query: '',
  setQuery: (str: string) => {
    console.log(str);
  },
};
export const SearchContext = createContext<SearchContextType>(defaultState);

// export const SearchResultsContext =
//   createContext<InitialSearchResultsContextType>({
//     searchResult: [],
//     // setQuery: () => {},v
//   });

// export type InitialSearchResultsContextType = {
//   searchResult: SearchResultType[];
// };
// export const SearchContext = createContext<InitialSearchContextType>({
//   queryContext: '',
//   // setQuery: () => {},
// });
