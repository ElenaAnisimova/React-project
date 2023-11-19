import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
});

export const { setQuery } = searchQuerySlice.actions;
export const searchQueryReducer = searchQuerySlice.reducer;

interface SearchLimitState {
  limit: number;
}

const initialStateLimit: SearchLimitState = {
  limit: 10,
};

const searchLimitSlice = createSlice({
  name: 'limit',
  initialState: initialStateLimit,
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
});

export const { setLimit } = searchLimitSlice.actions;
export const searchLimitReducer = searchLimitSlice.reducer;
