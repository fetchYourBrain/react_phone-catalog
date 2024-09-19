import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  itemsCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.itemsCount++;

      localStorage.setItem("cart", JSON.stringify(state));
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.itemsCount = state.items.length;

      localStorage.setItem("cart", JSON.stringify(state));
    },

    loadCardFromStorage: (state) => {
      const storedItems = JSON.parse(localStorage.getItem("cart"));
      if (storedItems) {
        state.items = storedItems.items || null;
        state.itemsCount = storedItems.itemsCount || 0;
      }
    },

    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
        state.itemsCount = state.items.reduce(
          (acc, curr) => acc + curr.quantity,
          0
        );
      }
    },

    addItemToCart: (state, action) => {
      const { item } = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
      state.itemsCount = state.items.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
    },
  },
});

export const { addItem, removeItem, loadCardFromStorage, updateItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
