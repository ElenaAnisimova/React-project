import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { searchQueryReducer } from "./reducers/queryReducers";
import { searchLimitReducer } from "./reducers/limitReducers";
import { currPageReducer } from "./reducers/pageReducers";
import { totalPagesReducer } from "./reducers/totalPagesReducers";
import { currCharacterReducer } from "./reducers/currCharacterReducers";
import { openDetailsReducer } from "./reducers/openDetailsReducers";
import { hasErrorReducer } from "./reducers/ErrorReducers";
import { dataAPI } from "../API/api";
import { createWrapper } from "next-redux-wrapper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { Action } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const store = () =>
  configureStore({
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

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
export const wrapper = createWrapper<AppStore>(store);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// export const store = configureStore({
//   reducer: {
//     search: searchQueryReducer,
//     // limit: searchLimitReducer,
//     // page: currPageReducer,
//     // totalPages: totalPagesReducer,
//     // currCharacter: currCharacterReducer,
//     // openDetails: openDetailsReducer,
//     // hasError: hasErrorReducer,
//     [dataAPI.reducerPath]: dataAPI.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(dataAPI.middleware),
// });


// export type AppStore = ReturnType<typeof store>;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const wrapper = createWrapper<(store)
