import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
