import { createContext } from 'react';

export type DetailsLoadingContextType = {
  areDetailsLoading: boolean;
  setAreDetailsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultState = {
  areDetailsLoading: false,
};

export const LoadingContext =
  createContext<DetailsLoadingContextType>(defaultState);
