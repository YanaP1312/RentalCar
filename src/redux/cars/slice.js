import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars } from "./operations.js";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    car: {},
    totalCars: null,
    page: 1,
    totalPages: 1,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.items = [...state.items, ...payload.cars];
        state.totalCars = payload.totalCars;
        state.page = payload.page;
        state.totalPages = payload.totalPages;
      })
      .addCase(fetchCarById.fulfilled, (state, { payload }) => {
        state.car = payload;
      })
      .addMatcher(isAnyOf(fetchCars.pending, fetchCarById.pending), (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addMatcher(
        isAnyOf(fetchCars.fulfilled, fetchCarById.fulfilled),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchCars.rejected, fetchCarById.rejected),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export const carsReducer = carsSlice.reducer;
