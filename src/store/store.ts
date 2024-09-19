import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import allProductSlice from "../slices/allProductSlice";
import cartSlice from "../slices/cartSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    productList: allProductSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
