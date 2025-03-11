import { createAsyncThunk } from '@reduxjs/toolkit'
import baseUrl from './../../../api/baseURL';

export const fetchTeachers = createAsyncThunk("teachers/fetch", async (currentPage, thunkAPI) => {
  try {
const token = localStorage.getItem("token")
    const res = await baseUrl.get(`/teachers?page=${currentPage}`, { headers: { Authorization: `Bearer ${token}` } });
    
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});


export const fetchTeachersBySubject = createAsyncThunk("teachers/fetchBySubject", async ({ subjectId, token }, thunkAPI) => {
  try {
    const res = await baseUrl.get(`/teachers?subject=${subjectId}`, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});


// إضافة إعجاب (love) للمدرس من الطالب
export const loveTeacher = createAsyncThunk("teachers/love", async ({ teacherId, token }, thunkAPI) => {
  try {
    const res = await baseUrl.post(
      `/teachers/love`,
      { teacher_id: teacherId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});