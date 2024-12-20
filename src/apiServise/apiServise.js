import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

axios.defaults.baseURL = BASE_URL;


export const fetchCamperDetails = createAsyncThunk(
  "camper/fetchCamperDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/campers/${id}`);

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
      const response = await axios.get(`/campers?${params.toString()}`); 
      return response.data.items || [];
    } catch (error) {
       console.error(
         "Error fetching vehicles:",
         error.response ? error.response.data : error.message
       );
      return rejectWithValue(error.message);
    }
  }
);
