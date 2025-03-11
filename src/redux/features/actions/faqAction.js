import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "./../../../api/baseURL";

export const fetchFaq = createAsyncThunk(
  "faq/fetch",
  async (currentPage, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await baseUrl.get(`/posts?page=${currentPage}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);





export const fetchOneFaq = createAsyncThunk(
    "faq/id/fetch",
    async (id, thunkAPI) => {
      try {
        const token = localStorage.getItem("token");
        const res = await baseUrl.get(`/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
  
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || error.message
        );
      }
    }
  );





export const fetchAnswers = createAsyncThunk(
    "faq/answers",
    async (id, thunkAPI) => {
      try {
        const token = localStorage.getItem("token");
        const res = await baseUrl.get(`comments?post_id=${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
  
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || error.message
        );
      }
    }
  );


  export const ansQuestion = createAsyncThunk(
    "ans/question",
    async ({content,post_id}, thunkAPI) => {
      try {
        const token = localStorage.getItem("token");
        const res = await baseUrl.post('comments/store',{content,post_id}, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        
  
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || error.message
        );
      }
    }
  );




  export const addQuestion = createAsyncThunk(
    "add/question",
    async ({title,body}, thunkAPI) => {
      try {
        const token = localStorage.getItem("token");
        const res = await baseUrl.post('/posts/store',{title,body}, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        
  
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data?.message || error.message
        );
      }
    }
  );