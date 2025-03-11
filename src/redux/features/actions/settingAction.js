import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from './../../../api/baseURL';

export const fetchSettings = createAsyncThunk("settings", async (_, thunkAPI) => {
  try {
    const res = await baseUrl.get("/settings");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});