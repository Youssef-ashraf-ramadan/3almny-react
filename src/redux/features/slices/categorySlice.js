import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../actions/categoryActions";

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.error=null

      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading=false;
        state.error=null
            })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error=action?.error?.message;
      });
  },
});

export default categorySlice.reducer;
