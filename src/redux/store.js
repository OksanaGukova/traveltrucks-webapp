import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice.js";
import campersSlise from './campersSlice.js'

export const store = configureStore({
  reducer: {
    campers: campersSlise,
    filters: filtersSlice,
  },
});
