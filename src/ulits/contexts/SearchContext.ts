import { createContext } from 'react';
import { SearchResultType } from '../../components/SearchResults/SearchResultsTypes';
type SearchQueryContextType = {
  query: string;
  setQuery: (str: string) => void;
};

const defaultState = {
  query: '',
  setQuery: (str: string) => {
    console.log(str);
  },
};
export const SearchContext =
  createContext<SearchQueryContextType>(defaultState);

export type SearchContextType = {
  searchResults: SearchResultType[];
  currentItem: SearchResultType;
};

const defaultStateCharacter = <SearchContextType>{
  searchResults: [],
  currentItem: {
    name: '',
    height: '',
    birth: '',
    race: '',
    spouse: '',
    _id: '',
  },
};

export const SearchResultsContext = createContext(defaultStateCharacter);
