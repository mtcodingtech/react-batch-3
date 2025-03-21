import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch all products
export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const res = await fetch("https://dummyjson.com/products"); // Replace with your API
  return res.json();
});

// Fetch products by category
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (category) => {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`
    ); // Replace with your API
    return res.json();
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    selectedCategory: null,
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchProducts.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(fetchProducts.fulfilled, (state, action) => {
      //   state.status = "succeeded";
      //   state.items = action.payload;
      // })
      // .addCase(fetchProducts.rejected, (state, action) => {
      //   state.status = "failed";
      //   state.error = action.error.message;
      // })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { setCategory } = productsSlice.actions;

export default productsSlice.reducer;
