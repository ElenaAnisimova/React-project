import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrCharacterState {
  currCharacter: string;
}

const initialStateCharacter: CurrCharacterState = {
  currCharacter: '',
};

const currCharacterSlice = createSlice({
  name: 'currCharacter',
  initialState: initialStateCharacter,
  reducers: {
    setCurrCharacter: (state, action: PayloadAction<string>) => {
      state.currCharacter = action.payload;
    },
  },
});

export const { setCurrCharacter } = currCharacterSlice.actions;
export const currCharacterReducer = currCharacterSlice.reducer;
