import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from './../../../api/baseURL';

// جلب جميع المراحل الدراسية
export const fetchGrades = createAsyncThunk("grades/fetch", async (_, thunkAPI) => {
  try {
    const res = await baseUrl.get("/grades");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});
