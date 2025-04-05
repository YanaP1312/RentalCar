import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations.js";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    totalCars: null,
    page: 1,
    totalPages: 1,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.items = payload.cars;
        state.totalCars = payload.totalCars;
        state.page = payload.page;
        state.totalPages = payload.totalPages;
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const carsReducer = carsSlice.reducer;
