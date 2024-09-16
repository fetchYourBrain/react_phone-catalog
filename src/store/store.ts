import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import allProductSlice from "../slices/allProductSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    productList: allProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
