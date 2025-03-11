import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from './../../../api/baseURL';

// جلب جميع المواد بناءً على الفئة الدراسية
export const fetchSubjects = createAsyncThunk("subjects/fetch", async (currentPage, thunkAPI) => {
  try {
    const token = localStorage.getItem("token")

    const res = await baseUrl.get(`/subjects?page=${currentPage}`, { headers: { Authorization: `Bearer ${token}` } });
    console.log(res);
    
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});
