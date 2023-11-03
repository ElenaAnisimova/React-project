import { ErrorInfo, ReactNode } from 'react';

export type Props = {
  value: string;
};

export type SearchResult = {
  name: string;
  height: string;
  birth: string;
  race: string;
  spouse: string;
};

export type AppState = {
  query: string;
  searchResults: SearchResult[];
  isSearchLoading: boolean;
  hasError: boolean;
};

export type ErrorBoundaryProps = {
  children?: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
  error: null | Error;
  errorInfo: null | ErrorInfo;
};
