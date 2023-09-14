import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // An array to hold the items in the cart
  },
  reducers: {
    // Action to add an item to the cart
    addToCart: (state, action) => {
      const { id, title, price, quantity, image } = action.payload;
      // Check if the item is already in the cart
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        // If the item is already in the cart, update its quantity
        existingItem.quantity += quantity;
      } else {
        // If it's a new item, add it to the cart
        state.items.push({ id, title, price, quantity, image });
      }
    },
    // Action to remove an item from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Action to clear the entire cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
