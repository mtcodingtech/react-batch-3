import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./productsSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: cartReducer,
  },
});
