import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching category data
export const fetchCategoryData = createAsyncThunk(
  "category/fetchData",
  async (category) => {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    return res.json();
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    selectedCategory: null,
    products: [],
    loading: false,
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryData.pending, (state) => {
        state.loading = true;
      }) 
      .addCase(fetchCategoryData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchCategoryData.rejected, (state) => {
        state.loading = false;
        state.products = [];
      });
  },
});

export const { setCategory } = categorySlice.actions;
export default categorySlice.reducer;
