import { createContext } from 'react';

export type DetailsOpenContextType = {
  openDetails: boolean;
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultState = {
  openDetails: false,
  setOpenDetails: (value: React.SetStateAction<boolean>) => console.log(value),
};

export const DetailsContext =
  createContext<DetailsOpenContextType>(defaultState);
