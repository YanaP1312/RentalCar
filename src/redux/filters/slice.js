import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchBrands } from "./operations.js";

const initialState = {
  brandList: [],
  priceList: [],
  brand: "",
  price: "",
  mileageFrom: null,
  mileageTo: null,
  isLoading: false,
  isError: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBrand: (state, { payload }) => {
      state.brand = payload;
    },
    setPrice: (state, { payload }) => {
      state.price = Number(payload);
    },
    setMileageFrom: (state, { payload }) => {
      state.mileageFrom = payload;
    },
    setMileageTo: (state, { payload }) => {
      state.mileageTo = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.brandList = payload;
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

export const { setBrand, setPrice, setMileageFrom, setMileageTo } =
  filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
