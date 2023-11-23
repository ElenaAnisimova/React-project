import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ErrorState {
  hasError: boolean;
}

const initialStateError: ErrorState = {
  hasError: false,
};

const ErrorSlice = createSlice({
  name: 'Error',
  initialState: initialStateError,
  reducers: {
    setHasError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
    },
  },
});

export const { setHasError } = ErrorSlice.actions;
export const hasErrorReducer = ErrorSlice.reducer;
