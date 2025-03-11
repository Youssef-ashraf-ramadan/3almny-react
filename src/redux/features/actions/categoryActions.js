import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from './../../../api/baseURL';

// جلب جميع الفئات
export const fetchCategories = createAsyncThunk("categories/fetch", async (_, thunkAPI) => {
  try {
    const res = await baseUrl.get("/categories");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});
