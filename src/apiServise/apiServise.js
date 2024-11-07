import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

axios.defaults.baseURL = BASE_URL;


export const fetchCamperDetails = createAsyncThunk(
  "camper/fetchCamperDetails",
  async (camperId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/campers/${camperId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching camper details:", error);
      return rejectWithValue(
        error.response?.data || "Failed to fetch camper details"
      );
    }
  }
);

export const fetchFilteredVehicles = createAsyncThunk(
  "filters/fetchFilteredVehicles",
  async (filters, { rejectWithValue }) => {
    const params = new URLSearchParams();

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        params.append(key, filters[key]);
      }
    });

    try {
      const response = await axios.get(`/campers`);
      // Переконайтеся, що ви повертаєте масив
      return response.data.items || []; // Повертаємо масив vehicles або порожній масив
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
