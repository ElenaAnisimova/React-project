export type SearchResultType = {
  name: string;
  height: string;
  birth: string;
  race: string;
  spouse: string;
  _id: string;
};

export type DataResponse = {
  docs: SearchResultType[];
  pages: number;
  total: number;
  limit: number;
  page: number;
};

export type SearchResultProps = {
  isSearchLoading: boolean;
  showDetails: (id: string) => void;
};

export const initialResponse: DataResponse = {
  docs: [],
  pages: 0,
  total: 0,
  limit: 0,
  page: 0,
};
