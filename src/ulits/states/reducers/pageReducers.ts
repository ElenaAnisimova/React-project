import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_VALUES } from '../../../../srcOLd/pages/SearchPageVariables';

interface currPageState {
  currPage: number;
}

const initialStatePage: currPageState = {
  currPage: DEFAULT_VALUES.DEFAULT_CURRENT_PAGE,
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
