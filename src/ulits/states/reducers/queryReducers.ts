import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface SearchQueryState {
  query: string;
}

const initialStateQuery: SearchQueryState = {
  query: '',
};

const searchQuerySlice = createSlice({
  name: 'search',
  initialState: initialStateQuery,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.query,
      }
    }
  }
});

export const { setQuery } = searchQuerySlice.actions;
export const searchQueryReducer = searchQuerySlice.reducer;
