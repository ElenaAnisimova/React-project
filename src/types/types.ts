export type Props = {
  value: string;
};

export type SearchResult = {
  name: string;
  height: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
};

export type AppState = {
  query: string;
  searchResults: SearchResult[];
  isSearchLoading: boolean;
};
