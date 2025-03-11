import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from './../../../api/baseURL';

export const fetchNotifications = createAsyncThunk("notifications/fetch", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const res = await baseUrl.get("/notifications/all",{ headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});
