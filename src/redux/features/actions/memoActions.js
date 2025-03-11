import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from './../../../api/baseURL';

// جلب المذكرات بناءً على المادة
export const fetchMemos = createAsyncThunk("memos/fetch", async (subjectId, thunkAPI) => {
  try {
    const res = await baseUrl.get(`/memos?subject_id=${subjectId}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});
