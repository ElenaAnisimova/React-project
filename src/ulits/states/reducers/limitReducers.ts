import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_VALUES } from '../../../../srcOLd/pages/SearchPageVariables';

interface SearchLimitState {
  limit: number;
}

const initialStateLimit: SearchLimitState = {
  limit: DEFAULT_VALUES.DEFAULT_LIMIT,
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
