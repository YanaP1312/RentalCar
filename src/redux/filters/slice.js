import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchBrands } from "./operations.js";

const initialState = {
  brand: [],
  price: [],
  mileageFrom: null,
  mileageTo: null,
  isLoading: false,
  isError: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducer: {
    setBrand: (state, { payload }) => {
      state.brand = payload;
    },
    setPrice: (state, { payload }) => {
      state.price = payload;
    },
    setMileageFrom: (state, { payload }) => {
      state.mileageForm = payload;
    },
    setMileageTo: (state, { payload }) => {
      state.mileageTo = payload;
    },
    resetFilters: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.brand = payload;
      })
      .addMatcher(isAnyOf(fetchBrands.pending), (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addMatcher(
        isAnyOf(fetchBrands.rejected, (state) => {
          (state.isLoading = false), (state.isError = true);
        })
      );
  },
});

const { setBrand, setPrice, setMileageFrom, setMileageTo, resetFilters } =
  filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
