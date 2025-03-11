import { createSlice } from "@reduxjs/toolkit";
import { fetchClasses } from "../actions/classActions";

const initialState = {
  classes: [],
  isLoading: false,
  error: null,
};

const classSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.classes = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      });
  },
});

export default classSlice.reducer;
