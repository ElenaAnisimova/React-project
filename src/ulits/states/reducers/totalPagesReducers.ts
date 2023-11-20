import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TotalPagesState {
  totalPages: number;
}

const initialStatePages: TotalPagesState = {
  totalPages: 0,
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
