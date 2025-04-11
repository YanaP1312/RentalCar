import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchBrands } from "./operations.js";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/localeStorage.js";

const savedFilters = loadFromLocalStorage("filters");

const initialState = savedFilters || {
  brandList: [],
  priceList: [],
  brand: "",
  price: "",
  mileageFrom: "",
  mileageTo: "",
  isLoading: false,
  isError: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBrand: (state, { payload }) => {
      state.brand = payload;
      saveToLocalStorage("filters", state);
    },
    setPrice: (state, { payload }) => {
      state.price = Number(payload);
      saveToLocalStorage("filters", state);
    },
    setMileageFrom: (state, { payload }) => {
      state.mileageFrom = payload;
      saveToLocalStorage("filters", state);
    },
    setMileageTo: (state, { payload }) => {
      state.mileageTo = payload;
      saveToLocalStorage("filters", state);
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
