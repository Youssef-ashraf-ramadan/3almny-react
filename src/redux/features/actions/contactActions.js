import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from './../../../api/baseURL';

// إرسال رسالة تواصل معنا
export const contactUs = createAsyncThunk("contact/send", async (data, thunkAPI) => {
  try {
    const res = await baseUrl.post("/contact-us", data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});
