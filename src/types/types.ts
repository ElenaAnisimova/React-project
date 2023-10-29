import { ErrorInfo, ReactNode } from 'react';

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

export type ErrorBoundaryProps = {
  children?: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
  error: null | Error;
  errorInfo: null | ErrorInfo;
};
