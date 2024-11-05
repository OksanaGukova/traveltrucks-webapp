import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  per_page: 4,
};

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
  "vehicles/fetchFiltered",
  async (filters, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/vehicles", { params: filters });
      return response.data;
    } catch (error) {
      console.error("Error fetching filtered vehicles:", error);
      return rejectWithValue(
        error.response?.data || "Failed to fetch vehicles"
      );
    }
  }
);