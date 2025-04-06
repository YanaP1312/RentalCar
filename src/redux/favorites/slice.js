import { createSlice } from "@reduxjs/toolkit";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../../utils/localeStorage.js";

const savedFavorites = loadFromLocalStorage("favorites");

const initialState = {
  favoritesCar: savedFavorites || [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavoritesCar: (state, { payload }) => {
      const exists = state.favoritesCar.find((car) => car.id === payload.id);
      if (exists) {
        state.favoritesCar = state.favoritesCar.filter(
          (car) => car.id !== payload.id
        );
      } else {
        state.favoritesCar.push(payload);
      }
      saveToLocalStorage("favorites", state.favoritesCar);
    },
  },
});

export const { toggleFavoritesCar } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
