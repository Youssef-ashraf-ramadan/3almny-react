import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../actions/postActions";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
        state.error = null;

      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      });
  },
});

export default postSlice.reducer;
