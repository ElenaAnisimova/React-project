import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchQueryState {
  query: string;
}

const initialState: SearchQueryState = {
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;
export const searchQueryReducer = searchSlice.reducer;
