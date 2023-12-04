import { createSlice } from '@reduxjs/toolkit';
import { Base64FormDataType } from '../../../types/types';

const initialState: { data: Base64FormDataType[] } = {
  data: [],
};

const reactHookDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = [action.payload, ...state.data].flat();
    },
  },
});

export const { setData } = reactHookDataSlice.actions;
export const dataReducer = reactHookDataSlice.reducer;
