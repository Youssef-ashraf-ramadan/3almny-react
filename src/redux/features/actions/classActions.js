import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from './../../../api/baseURL';

// جلب جميع الفصول الدراسية بناءً على المرحلة
export const fetchClasses = createAsyncThunk("classes/fetch", async (gradeId, thunkAPI) => {
  try {
    const res = await baseUrl.get(`/classes?grade_id=${gradeId}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});
