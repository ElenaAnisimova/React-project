import React, { ErrorInfo } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundaryTypes';

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(errorArg: Error, errorInfoArg: ErrorInfo) {
    this.setState({ error: errorArg, errorInfo: errorInfoArg });
    console.error(errorArg, errorInfoArg);
  }

  render() {
    if (this.state.errorInfo) {
      return <h2>Error!</h2>;
    }
    return this.props.children;
  }
}
