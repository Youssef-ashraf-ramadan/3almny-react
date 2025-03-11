import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "./../../../api/baseURL";

// Utility to handle error messages
const parseErrorMessage = (error) => {
  if (error.response?.data?.errors) {
    return Object.values(error.response.data.errors)
      .flat()
      .join(" ");
  }
  if (error.response?.data?.message) {
    return error.response.data.message; // e.g., "The provided credentials are incorrect."
  }
  if (error.message) {
    return error.message;
  }
  return "حدث خطأ غير متوقع. حاول مرة أخرى لاحقًا.";
};

// تسجيل الدخول
export const loginUser = createAsyncThunk(
  "/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await baseUrl.post("/user/login", credentials);
      const token = res.data.token;
      const id = res.data.user.id;

      // Save token and ID in localStorage
      if (token) {
        localStorage.setItem("token", token);
      }
      if (id) {
        localStorage.setItem("id", id);
      }

      return res.data;
    } catch (error) {
      // Reject with parsed error message
      const parsedError = parseErrorMessage(error);
      console.error("Login Error:", parsedError); // For debugging
      return thunkAPI.rejectWithValue(parsedError);
    }
  }
);

// تسجيل المستخدم
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const res = await baseUrl.post("/user/register", userData);
      const token = res.data.token;

      // Save token in localStorage
      if (token) {
        localStorage.setItem("token", token);
      }

      return res.data; // Returning user data
    } catch (error) {
      const parsedError = parseErrorMessage(error);
      console.error("Registration Error:", parsedError); // For debugging
      return thunkAPI.rejectWithValue(parsedError);
    }
  }
);
