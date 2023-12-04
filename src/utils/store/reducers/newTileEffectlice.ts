import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  effect: false,
};

const newTileEffectSlice = createSlice({
  name: 'effect',
  initialState,
  reducers: {
    setEffect: (state, action) => {
      state.effect = action.payload;
    },
  },
});

export const { setEffect } = newTileEffectSlice.actions;
export const effectReducer = newTileEffectSlice.reducer;
