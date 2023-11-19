import { configureStore } from '@reduxjs/toolkit';
import { searchLimitReducer, searchQueryReducer } from './reducers';
import { dataAPI } from '../api';

export const store = configureStore({
  reducer: {
    search: searchQueryReducer,
    limit: searchLimitReducer,
    [dataAPI.reducerPath]: dataAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
