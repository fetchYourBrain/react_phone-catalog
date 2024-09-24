import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addItemToFavorites: (state, action) => {
      const { item } = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (!existingItem) {
        state.items.push(item);
      }
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },

    removeItemFromFavorites: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },

    loadFavoritesFromStorage: (state) => {
      const storedItems = JSON.parse(localStorage.getItem("favorites"));
      if (storedItems) {
        state.items = storedItems || [];
      }
    },
  },
});

export const { addItemToFavorites, removeItemFromFavorites, loadFavoritesFromStorage } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;