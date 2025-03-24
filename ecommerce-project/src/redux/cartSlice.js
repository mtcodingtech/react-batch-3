import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  open: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    toggleCart: (state, action) => {
      state.open = action.payload;
    },
  },
});
export const selectTotalCount = (state) => {
    return state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
  };

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  toggleCart,
} = cartSlice.actions;
export default cartSlice.reducer;
