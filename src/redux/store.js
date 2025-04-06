import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/slice.js";
import { filtersReducer } from "./filters/slice.js";
import { favoritesReducer } from "./favorites/slice.js";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorites: favoritesReducer,
    filters: filtersReducer,
  },
});
