import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface currPageState {
  currPage: number;
}

const initialStatePage: currPageState = {
  currPage: 1,
};

const currPageSlice = createSlice({
  name: 'page',
  initialState: initialStatePage,
  reducers: {
    setCurrPage: (state, action: PayloadAction<number>) => {
      state.currPage = action.payload;
    },
  },
});

export const { setCurrPage } = currPageSlice.actions;
export const currPageReducer = currPageSlice.reducer;
