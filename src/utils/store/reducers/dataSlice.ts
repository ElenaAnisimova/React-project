import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormDataType } from '../../../types/types';

const initialState: { data: FormDataType[] } = {
  data: [],
};

const reactHookDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<FormDataType[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = reactHookDataSlice.actions;
export const dataReducer = reactHookDataSlice.reducer;
