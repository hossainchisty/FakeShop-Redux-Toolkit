import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    // Action to add an item to the cart
    addToCart: (state, action) => {
      const { id, title, price, quantity, image } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ id, title, price, quantity, image });
      }
      state.totalQuantity++;
    },

    // Action to remove an item from the cart
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    // Action to update quantity
    updateQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === productId);

      if (itemToUpdate) {
        // Update the quantity of the specific item
        itemToUpdate.quantity = newQuantity;
      }
    },
    // Action to clear the entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
