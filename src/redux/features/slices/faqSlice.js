import { createSlice } from "@reduxjs/toolkit";
import { fetchFaq,fetchAnswers,ansQuestion ,fetchOneFaq, addQuestion} from "../actions/faqAction";

const initialState = {
  faqs: [],
  answers:[],
  answer:{},
  ans:{},
  faq:{},
  isLoading: false,
  error: null,
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaq.pending, (state) => {
        state.isLoading = true;
        state.error=null

      })
      .addCase(fetchFaq.fulfilled, (state, action) => {
        state.faqs = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })



      .addCase(fetchAnswers.pending, (state) => {
        state.isLoading = true;
        state.error=null

      })
      .addCase(fetchAnswers.fulfilled, (state, action) => {
        state.answers = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAnswers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })





      .addCase(ansQuestion.pending, (state) => {
        state.isLoading = true;
        state.error=null

      })
      .addCase(ansQuestion.fulfilled, (state, action) => {
        state.answer = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(ansQuestion.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })





      .addCase(fetchOneFaq.pending, (state) => {
        state.isLoading = true;
        state.error=null

      })
      .addCase(fetchOneFaq.fulfilled, (state, action) => {
        state.faq = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchOneFaq.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      })





      .addCase(addQuestion.pending, (state) => {
        state.isLoading = true;
        state.error=null

      })
      .addCase(addQuestion.fulfilled, (state, action) => {
        state.ans = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addQuestion.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      });
  },
});

export default faqSlice.reducer;
