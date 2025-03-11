import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProfile , updateUserPassword, updateUserProfile } from "../actions/profileActions";
import { toast } from "react-toastify";

const initialState = {
  profile: {},
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : { message: "حدث خطأ غير متوقع" };
      })



      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.isLoading = false;
        state.error = null;

      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : { message: "حدث خطأ غير متوقع" };
      })



      .addCase(updateUserPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserPassword.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.isLoading = false;
        state.error = null;

        toast.success("تم تحديث كلمة المرور بنجاح! 🎉");


      })
      .addCase(updateUserPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload : { message: "حدث خطأ غير متوقع" };
      })



      
  },
});

export default profileSlice.reducer;
