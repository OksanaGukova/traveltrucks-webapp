import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice.js";
import campersSlise from "./campersSlice.js";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import favoritesReducer from "./favoritesSlice.js";
const persistConfig = {
  key: "root",
  storage,
};

const persistedCampersReducer = persistReducer(persistConfig, campersSlise);

export const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
    filters: filtersSlice,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);
