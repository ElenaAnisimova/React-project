import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_VALUES } from '../../../../srcOLd/pages/SearchPageVariables';

interface TotalPagesState {
  totalPages: number;
}

const initialStatePages: TotalPagesState = {
  totalPages: DEFAULT_VALUES.DEFAULT_TOTAL_PAGES,
};

const TotalPagesSlice = createSlice({
  name: 'totalPages',
  initialState: initialStatePages,
  reducers: {
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setTotalPages } = TotalPagesSlice.actions;
export const totalPagesReducer = TotalPagesSlice.reducer;
