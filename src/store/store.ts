import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./users/user.slice";

//store
const rootReducer = combineReducers({userReducer});
export type RootState = ReturnType<typeof rootReducer>;
//core
export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });
//action
export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore["dispatch"];