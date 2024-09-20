import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import cartSlice from "../slices/cartSlice";
import deviceSlice from "../slices/deviceSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
    device: deviceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
