import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredVehicles } from "../apiServise/apiServise.js";

const initialState = {
  location: "",
  bodyType: null,
  hasAC: false,
  hasKitchen: false,
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setLocationFilter(state, action) {
            state.location = action.payload;
        },
        setBodyTypeFilter(state, action) {
            state.bodyType = action.payload;
        },
        toggleACFilter(state) {
            state.hasAC = !state.hasAC;
        },
        toggleKitchenFilter(state) {
            state.hasKitchen = !state.hasKitchen;
        },
    },
   extraReducers: (builder) => {
        builder
          .addCase(fetchFilteredVehicles.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(fetchFilteredVehicles.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
          })
          .addCase(fetchFilteredVehicles.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });
    },
});



export const {
  setLocationFilter,
  setBodyTypeFilter,
  toggleACFilter,
  toggleKitchenFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
