import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "./operations.js";

const initialState = {
  favoritesCar: loadFromLocalStorage(),
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
      localStorage.setItem("favorites", JSON.stringify(state.favoritesCar));
    },
  },
});

export const { toggleFavoritesCar } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
