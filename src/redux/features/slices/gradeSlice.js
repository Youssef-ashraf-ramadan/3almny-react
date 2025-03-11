import { createSlice } from "@reduxjs/toolkit";
import { fetchGrades } from "../actions/gradeActions";

const initialState = {
  grades: [],
  isLoading: false,
  error: null,
};

const gradeSlice = createSlice({
  name: "grades",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGrades.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGrades.fulfilled, (state, action) => {
        state.grades = action.payload;
        state.isLoading = false;
        state.error = null;      })
      .addCase(fetchGrades.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      });
  },
});

export default gradeSlice.reducer;
