import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers,fetchTeachersBySubject , loveTeacher } from "../actions/teacherActions";

const initialState = {
  teachers:[],
  teachersBySubject: [],
  lovedTeachers: [],

  isLoading: false,
  error: null,
};

const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder


    .addCase(fetchTeachers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchTeachers.fulfilled, (state, action) => {
      state.teachers = action.payload;
      state.isLoading = false;
      state.error = null;

    })
    .addCase(fetchTeachers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.error?.message;
    })


      .addCase(fetchTeachersBySubject.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTeachersBySubject.fulfilled, (state, action) => {
        state.teachersBySubject = action.payload;
        state.isLoading = false;
        state.error = null;

      })
      .addCase(fetchTeachersBySubject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })


      .addCase(loveTeacher.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loveTeacher.fulfilled, (state, action) => {
        state.lovedTeachers = action.payload;
        state.isLoading = false;
        state.error = null;

      })
      .addCase(loveTeacher.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })
  },
});

export default teacherSlice.reducer;
