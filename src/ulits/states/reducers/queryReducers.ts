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
