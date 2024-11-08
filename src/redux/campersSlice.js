import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperDetails } from "../apiServise/apiServise.js";

const camperSlice = createSlice({
  name: "camper",
  initialState: {
    details: [], // Ініціалізуємо як порожній масив
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamperDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload; // Переконайтеся, що action.payload є масивом
      })
      .addCase(fetchCamperDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default camperSlice.reducer;