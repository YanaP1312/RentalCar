import { createAsyncThunk } from "@reduxjs/toolkit";
import { rentalCarApi } from "../rental-car-api.js";

export const fetchBrands = createAsyncThunk(
  "filters/fetchBrands",
  async (_, thunkAPI) => {
    try {
      const res = await rentalCarApi.get("/brands");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
