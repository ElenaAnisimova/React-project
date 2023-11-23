import { ErrorInfo, ReactNode } from 'react';

export type ErrorBoundaryProps = {
  children?: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
  error: null | Error;
  errorInfo: null | ErrorInfo;
};
