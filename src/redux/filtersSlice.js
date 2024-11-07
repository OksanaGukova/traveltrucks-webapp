import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredVehicles } from "../apiServise/apiServise.js";

// Початковий стан
const initialState = {
  location: "",
  form: null,
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
    setFormTypeFilter(state, action) {
      state.form = action.payload;
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
        console.log("Fetched vehicles:", action.payload); // Лог для перевірки
        console.log(
          "Is action.payload an array?",
          Array.isArray(action.payload)
        ); // Перевірка типу

        state.isLoading = false;
        // Перевірка, чи є action.payload масивом, і оновлення filteredCampers
        state.filteredCampers = Array.isArray(action.payload)
          ? action.payload
          : [];
        state.items = action.payload; // Оновлення всіх автомобілів, якщо потрібно
      })
      .addCase(fetchFilteredVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong"; // Повідомлення про помилку
      });
  },
});

// Експортуємо дії редуктора
export const {
  setLocationFilter,
  setFormTypeFilter,
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
