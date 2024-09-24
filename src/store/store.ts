import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import cartSlice from "../slices/cartSlice";
import deviceSlice from "../slices/deviceSlice";
import favoritesSlice from "../slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    device: deviceSlice,
    favorites: favoritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
