import { configureStore } from '@reduxjs/toolkit';
import { dataReducer } from './reducers/dataSlice';
import { effectReducer } from './reducers/newTileEffectlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    effect: effectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
