import { createSlice } from "@reduxjs/toolkit";
import { contactUs } from "../actions/contactActions";

const initialState = {
  contact: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactUs.pending, (state) => {
        state.isLoading = true;
        state.error=null

      })
      .addCase(contactUs.fulfilled, (state, action) => {
        state.contact = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(contactUs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      });
  },
});

export default contactSlice.reducer;
