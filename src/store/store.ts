import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import deviceSlice from "../slices/deviceSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    device: deviceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
