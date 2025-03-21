import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import productsReducer from "./productsSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    products: productsReducer,
  },
});