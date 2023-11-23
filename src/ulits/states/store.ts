import { configureStore } from '@reduxjs/toolkit';
import { searchQueryReducer } from './reducers/queryReducers';
import { searchLimitReducer } from './reducers/limitReducers';
import { currPageReducer } from './reducers/pageReducers';
import { totalPagesReducer } from './reducers/totalPagesReducers';
import { currCharacterReducer } from './reducers/currCharacterReducers';
import { openDetailsReducer } from './reducers/openDetailsReducers';
import { hasErrorReducer } from './reducers/ErrorReducers';
import { dataAPI } from '../API/api';

export const store = configureStore({
  reducer: {
    search: searchQueryReducer,
    limit: searchLimitReducer,
    page: currPageReducer,
    totalPages: totalPagesReducer,
    currCharacter: currCharacterReducer,
    openDetails: openDetailsReducer,
    hasError: hasErrorReducer,
    [dataAPI.reducerPath]: dataAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
