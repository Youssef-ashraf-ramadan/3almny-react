import { createSlice } from "@reduxjs/toolkit";
import { fetchMemos } from "../actions/memoActions";

const initialState = {
  memos: [],
  isLoading: false,
  error: null,
};

const memoSlice = createSlice({
  name: "memos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMemos.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMemos.fulfilled, (state, action) => {
        state.memos = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchMemos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      });
  },
});

export default memoSlice.reducer;
