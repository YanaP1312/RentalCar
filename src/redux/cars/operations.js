import { createAsyncThunk } from "@reduxjs/toolkit";
import { rentalCarApi } from "../rental-car-api.js";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await rentalCarApi.get("/cars");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
