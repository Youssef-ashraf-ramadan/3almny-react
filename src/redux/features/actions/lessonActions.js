import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "./../../../api/baseURL";

// مواعيد حصص الطالب
export const fetchStudentLessons = createAsyncThunk(
  "lessons/student",
  async (page, thunkAPI) => {
    const token = localStorage.getItem('token');

    try {
      const res = await baseUrl.get(`/lessons?page=${page}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || error
      );
    }
  }
);

// مواعيد حصص المدرس
export const fetchLessonId = createAsyncThunk(
  "lessons/teacher",
  async (id, thunkAPI) => {
    const token = localStorage.getItem('token');

    try {
      const res = await baseUrl.get(`/lessons/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || error
      );
    }
  }
);

// الحصص المجانية
export const fetchFreeLessons = createAsyncThunk(
  "lessons/free",
  async (_, thunkAPI) => {
    const token = localStorage.getItem('token');

    try {
      const res = await baseUrl.get("/lessons?price=0", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || error
      );
    }
  }
);

// حصص المادة
export const fetchLessonsSubject = createAsyncThunk(
  "lessons/subject",
  async ({ id, currentPage }, thunkAPI) => {
    const token = localStorage.getItem('token');

    try {
      const res = await baseUrl.get(
        `/lessons?subject_id=${id}&page=${currentPage}`,  {
            headers: { Authorization: `Bearer ${token}` }
          }
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message || error
      );
    }
  }
);

export const fetchLessonsTeacher = createAsyncThunk(
  "teachers/fetchLessons",
  async ({ teacherId, currentPage }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await baseUrl.get(
        `/lessons?page=${currentPage}&teacher_id=${teacherId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      console.log(res);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);
