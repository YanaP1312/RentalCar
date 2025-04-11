import { createAsyncThunk } from "@reduxjs/toolkit";
import { rentalCarApi } from "../rental-car-api.js";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { brand, price, mileageFrom, mileageTo } = state.filters;
    const { page } = state.cars;

    const params = new URLSearchParams();
    if (brand) params.append("brand", brand);
    if (price) params.append("rentalPrice", price);
    if (mileageFrom) params.append("minMileage", mileageFrom);
    if (mileageTo) params.append("maxMileage", mileageTo);
    params.append("page", page);

    console.log("Filter params:", params.toString());

    try {
      const res = await rentalCarApi.get(`/cars?${params.toString()}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.status || error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchById",
  async (id, thunkApi) => {
    try {
      const res = await rentalCarApi.get(`cars/${id}`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.status || error.message);
    }
  }
);
