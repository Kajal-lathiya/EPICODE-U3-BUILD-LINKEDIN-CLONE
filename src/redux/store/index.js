import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducers";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
//   import { encryptTransform } from 'redux-persist-transform-encrypt'

const persistConfig = {
  key: "root", // ???
  storage: localStorage // the default engine
  // transforms: [
  //   encryptTransform({
  //     secretKey: process.env.REACT_APP_SECRET_KEY,
  //   }),
  // ],
};

const bigReducer = combineReducers({
  profile: profileReducer
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);
