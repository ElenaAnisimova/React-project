import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OpenDetailsState {
  openDetails: boolean;
}

const initialStateOpenDetails: OpenDetailsState = {
  openDetails: false,
};

const openDetailsSlice = createSlice({
  name: 'openDetails',
  initialState: initialStateOpenDetails,
  reducers: {
    setOpenDetails: (state, action: PayloadAction<boolean>) => {
      state.openDetails = action.payload;
    },
  },
});

export const { setOpenDetails } = openDetailsSlice.actions;
export const openDetailsReducer = openDetailsSlice.reducer;
