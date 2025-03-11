import { createSlice } from "@reduxjs/toolkit";
import { fetchStudentLessons , fetchLessonId , fetchFreeLessons,fetchLessonsSubject,fetchLessonsTeacher } from "../actions/lessonActions";

const initialState = {
  lessons: [],
  oneLesson :{},
  isLoading: false,
  error: null,
};

const lessonSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudentLessons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStudentLessons.fulfilled, (state, action) => {
        state.lessons = action.payload;
        state.isLoading = false;
        state.error = null;      })
      .addCase(fetchStudentLessons.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })






      .addCase(fetchLessonId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLessonId.fulfilled, (state, action) => {
        state.oneLesson = action.payload;
        state.isLoading = false;
        state.error = null;      })
      .addCase(fetchLessonId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })




      .addCase(fetchFreeLessons.pending, (state) => {
        state.isLoading = true;
        state.error=null

      })
      .addCase(fetchFreeLessons.fulfilled, (state, action) => {
        state.lessons = action.payload;
        state.isLoading = false;
        state.error=null

      })
      .addCase(fetchFreeLessons.rejected, (state, action) => {
        state.isLoading = false;
        state.error=action?.error?.message;
      })







      
      .addCase(fetchLessonsSubject.pending, (state) => {
        state.isLoading = true;
        state.error=null

      })
      .addCase(fetchLessonsSubject.fulfilled, (state, action) => {
        state.lessons = action.payload;
        state.isLoading = false;
        state.error=null

      })
      .addCase(fetchLessonsSubject.rejected, (state, action) => {
        state.isLoading = false;
        state.error=action?.error?.message;
      })




            
      .addCase(fetchLessonsTeacher.pending, (state) => {
        state.isLoading = true;
        state.error=null

      })
      .addCase(fetchLessonsTeacher.fulfilled, (state, action) => {
        state.lessons = action.payload;
        state.isLoading = false;
        state.error=null

      })
      .addCase(fetchLessonsTeacher.rejected, (state, action) => {
        state.isLoading = false;
        state.error=action?.error?.message;
      })

      

  },
});

export default lessonSlice.reducer;
