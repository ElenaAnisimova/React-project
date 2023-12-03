import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Base64FormDataType } from '../../../types/types';

const initialState: { data: Base64FormDataType[] } = {
  data: [],
};

const reactHookDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Base64FormDataType[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = reactHookDataSlice.actions;
export const dataReducer = reactHookDataSlice.reducer;
