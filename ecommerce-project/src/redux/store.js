import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./productsSlice";

export const store = configureStore({
    reducer: {
        products: ProductsReducer
    }
})