import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars } from "./operations.js";

const initialState = {
  items: [],
  car: {},
  totalCars: null,
  page: 1,
  totalPages: null,
  isLoading: false,
  isError: false,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    resetItems: (state) => {
      state.items = [];
      state.page = 1;
      state.totalCars = null;
      state.totalPages = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        if (state.page === 1) {
          state.items = payload.cars;
        } else {
          state.items.push(...payload.cars);
        }
        state.totalCars = payload.totalCars;
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
export const { setPage, resetItems } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
