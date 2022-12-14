import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import multProfileReducer from "../reducers/multProfileReducer";
import experienceReducer from "../reducers/experienceReducer";
import getSpecificExpReducer from "../reducers/specificExpReducer";
import editExpReducer from "../reducers/editSpecificExpReducer";
import deleteExpReducer from "../reducers/deleteSpecificExpReducer";
import createNewExpReducer from "../reducers/createNewExpReducer";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "E1a2g3le",
    }),
  ],
};

const bigReducer = combineReducers({
  profile: profileReducer,
  profiles: multProfileReducer,
  experience: experienceReducer,
  getspecificexp: getSpecificExpReducer,
  editexp: editExpReducer,
  deleteexp: deleteExpReducer,
  createexp:createNewExpReducer
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
export const persistor = persistStore(store);
