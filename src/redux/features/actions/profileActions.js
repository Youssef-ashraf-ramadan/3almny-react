import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from './../../../api/baseURL';

// جلب ملف المستخدم
export const fetchUserProfile = createAsyncThunk("user/profile", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const res = await baseUrl.get("/user/profile", { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (error) {
return thunkAPI.rejectWithValue(
        error.response?.data?.errors || error.response?.data?.message || "حدث خطأ غير متوقع"
      );  }
});

// تحديث ملف المستخدم
export const updateUserProfile = createAsyncThunk("user/updateProfile", async ({ userData, _ }, thunkAPI) => {
  try {
    const token = localStorage.getItem("token")
    const res = await baseUrl.post("/user/update-profile", userData, { headers: { Authorization: `Bearer ${token}`,        "Content-Type": "multipart/form-data",
    } });
    return res.data;
  } catch (error) {
return thunkAPI.rejectWithValue(
        error.response?.data?.errors || error.response?.data?.message || "حدث خطأ غير متوقع"
      );  }
});




export const updateUserPassword = createAsyncThunk(
  "user/updatePassword",
  async (userData, thunkAPI) => {  // إزالة {} غير الضرورية حول userData
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return thunkAPI.rejectWithValue("التوكن غير موجود، الرجاء تسجيل الدخول مرة أخرى.");
      }

      const res = await baseUrl.post(
        "/user/password/change",
        userData, 
        { 
          headers: { 
            Authorization: `Bearer ${token}`,        
            "Content-Type": "application/json",
          } 
        }
      );

      return res.data;
    } catch (error) {
      console.error("❌ خطأ أثناء تحديث كلمة المرور:", error.response?.data || error);

      return thunkAPI.rejectWithValue(
        error.response?.data?.errors || error.response?.data?.message || "حدث خطأ غير متوقع"
      );
    }
  }
);
