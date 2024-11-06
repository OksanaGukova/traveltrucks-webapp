import { createSlice } from "@reduxjs/toolkit";
import { fetchFilteredVehicles } from "../apiServise/apiServise.js";

const initialState = {
  location: "",
  bodyType: null,
  hasPetrol: false, // Фільтр за типом двигуна
  hasAutomaticTransmission: false, // Фільтр за автоматичною трансмісією
  hasAC: false, // Фільтр за наявністю кондиціонера
  hasBathroom: false, // Фільтр за наявністю ванної кімнати
  hasKitchen: false, // Фільтр за наявністю кухні
  hasTV: false, // Фільтр за наявністю телевізора
  hasRadio: false, // Фільтр за наявністю радіо
  hasRefrigerator: false, // Фільтр за наявністю холодильника
  hasMicrowave: false, // Фільтр за наявністю мікрохвильовки
  hasGas: false, // Фільтр за наявністю газу
  hasWater: false, // Фільтр за наявністю водопостачання

  items: [], // Список відфільтрованих кемперів
  isLoading: false, // Статус завантаження
  error: null, // Повідомлення про помилку
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
    togglePetrolFilter(state) {
      state.hasPetrol = !state.hasPetrol;
    },
    toggleTransmissionFilter(state) {
      state.automaticTransmission = !state.automaticTransmission;
    },
    toggleACFilter(state) {
      state.hasAC = !state.hasAC;
    },
    toggleBathroomFilter(state) {
      state.hasBathroom = !state.hasBathroom;
    },
    toggleKitchenFilter(state) {
      state.hasKitchen = !state.hasKitchen;
    },
    toggleTVFilter(state) {
      state.hasTV = !state.hasTV;
    },
    toggleRadioFilter(state) {
      state.hasRadio = !state.hasRadio;
    },
    toggleRefrigeratorFilter(state) {
      state.hasRefrigerator = !state.hasRefrigerator;
    },
    toggleMicrowaveFilter(state) {
      state.hasMicrowave = !state.hasMicrowave;
    },
    toggleGasFilter(state) {
      state.hasGas = !state.hasGas;
    },
    toggleWaterFilter(state) {
      state.hasWater = !state.hasWater;
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
  togglePetrolFilter,
  toggleTransmissionFilter,
  toggleACFilter,
  toggleBathroomFilter,
  toggleKitchenFilter,
  toggleTVFilter,
  toggleRadioFilter,
  toggleRefrigeratorFilter,
  toggleMicrowaveFilter,
  toggleGasFilter,
  toggleWaterFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
