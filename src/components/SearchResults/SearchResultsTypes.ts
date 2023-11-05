export type SearchResultType = {
  name: string;
  height: string;
  birth: string;
  race: string;
  spouse: string;
  _id: string;
};

export type SearchResultProps = {
  searchResults: SearchResultType[];
  isSearchLoading: boolean;
  showDetails: (id: string) => void;
};
