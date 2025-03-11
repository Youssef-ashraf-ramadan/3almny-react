import { createSlice } from "@reduxjs/toolkit";
import { changeTestStatus, fetchAllTests,fetchBySubjectTests,fetchStudentTests, getTestById, submitTestAnswers } from "../actions/testActions";
import { toast } from "react-toastify";

const initialState = {
  tests: [],
  exam:{},
  join:{},
  test:{},
  answer:{},
  testsFilter: [],
  isLoading: false,
  error: null,
};

const testSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTests.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllTests.fulfilled, (state, action) => {
        state.tests = action.payload;
        state.isLoading = false;
        state.error = null;

      })
      .addCase(fetchAllTests.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })


      .addCase(fetchBySubjectTests.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBySubjectTests.fulfilled, (state, action) => {
        state.testsFilter = action.payload;
        state.isLoading = false;
        state.error = null;

      })
      .addCase(fetchBySubjectTests.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })





      .addCase(fetchStudentTests.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchStudentTests.fulfilled, (state, action) => {
        state.tests = action.payload;
        state.isLoading = false;
        state.error = null;

      })
      .addCase(fetchStudentTests.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })










      .addCase(submitTestAnswers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(submitTestAnswers.fulfilled, (state, action) => {
        state.answer = action.payload;
        
        state.isLoading = false;

        toast.success("تم التسليم بنجاح");

      })
      .addCase(submitTestAnswers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(changeTestStatus.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changeTestStatus.fulfilled, (state, action) => {
        state.join = action.payload;
        
        state.isLoading = false;
      })
      .addCase(changeTestStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })











      .addCase(getTestById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTestById.fulfilled, (state, action) => {
        state.test = action.payload;
        state.isLoading = false;
        state.error = null;

      })
      .addCase(getTestById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })
  },
});

export default testSlice.reducer;
