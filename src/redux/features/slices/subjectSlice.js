import { createSlice } from "@reduxjs/toolkit";
import { fetchSubjects } from "../actions/subjectActions";

const initialState = {
  subjects: [],
  isLoading: false,
  error: null,
};

const subjectSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubjects.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSubjects.fulfilled, (state, action) => {
        state.subjects = action.payload;
        state.isLoading = false;
        state.error = null;

      })
      .addCase(fetchSubjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      });
  },
});

export default subjectSlice.reducer;
