export type SearchResultType = {
  name: string;
  height: string;
  birth: string;
  race: string;
  spouse: string;
};

export type SearchResultProps = {
  searchResults: SearchResultType[];
  isSearchLoading: boolean;
};
