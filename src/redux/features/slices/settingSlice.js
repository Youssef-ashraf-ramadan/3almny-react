import { createSlice } from "@reduxjs/toolkit";
import { fetchSettings } from "../actions/settingAction";

const initialState = {
  settings: {},
  isLoading: false,
  error: null,
};

const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.isLoading = true;
        state.error=null

      })
      .addCase(fetchSettings.fulfilled, (state, action) => {
        state.settings = action.payload;
        state.isLoading=false;
        state.error=null
            })
      .addCase(fetchSettings.rejected, (state, action) => {
        state.isLoading = false;
        state.error=action?.error?.message;
      });
  },
});


export default settingSlice.reducer;
