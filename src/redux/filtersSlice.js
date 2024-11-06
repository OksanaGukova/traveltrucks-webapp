import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredVehicles } from "../apiServise/apiServise.js";

const initialState = {
  location: "",
  bodyType: null,
  engine: null,
  transmission: null,
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  radio: false,
  refrigerator: false,
  microwave: false,
  gas: false,
  water: false,
  items: [],
  isLoading: false,
  error: null,
  filteredCampers: [],
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
    togglePetrolFilter(state, action) {
      state.engine = action.payload;
    },
    setTransmissionFilter(state, action) {
      
      state.transmission = action.payload; 
    },
    toggleACFilter(state) {
      state.AC = !state.AC;
    },
    toggleBathroomFilter(state) {
      state.bathroom = !state.bathroom;
    },
    toggleKitchenFilter(state) {
      state.kitchen = !state.kitchen;
    },
    toggleTVFilter(state) {
      state.TV = !state.TV;
    },
    toggleRadioFilter(state) {
      state.radio = !state.radio;
    },
    toggleRefrigeratorFilter(state) {
      state.refrigerator = !state.refrigerator;
    },
    toggleMicrowaveFilter(state) {
      state.microwave = !state.microwave;
    },
    toggleGasFilter(state) {
      state.gas = !state.gas;
    },
    toggleWaterFilter(state) {
      state.water = !state.water;
    },
    resetFilters() {
      return initialState; 
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
        state.filteredCampers = action.payload; 
        state.location = "";
        state.bodyType = null;
        state.engine = null;
        state.transmission = null;
        state.AC = false;
        state.bathroom = false;
        state.kitchen = false;
        state.TV = false;
        state.radio = false;
        state.refrigerator = false;
        state.microwave = false;
        state.gas = false;
        state.water = false;
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
  togglePetrolFilter,
  setTransmissionFilter,
  toggleACFilter,
  toggleBathroomFilter,
  toggleKitchenFilter,
  toggleTVFilter,
  toggleRadioFilter,
  toggleRefrigeratorFilter,
  toggleMicrowaveFilter,
  toggleGasFilter,
  toggleWaterFilter,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
