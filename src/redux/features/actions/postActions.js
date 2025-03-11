import { createAsyncThunk } from '@reduxjs/toolkit';
import baseUrl from './../../../api/baseURL';

// الحصول على الأسئلة
export const fetchPosts = createAsyncThunk('posts/get', async (_, thunkAPI) => {
    try {
        const res = await baseUrl.get('/posts');
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message || error);
    }
});

// إضافة سؤال جديد
export const addPost = createAsyncThunk('posts/add', async (postData, thunkAPI) => {
    try {
        const res = await baseUrl.post('/posts', postData);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message || error);
    }
});

// رفع إجابة على سؤال
export const addComment = createAsyncThunk('comments/add', async ({ post_id, content, token }, thunkAPI) => {
    try {
        const res = await baseUrl.post('/comments/store', { post_id, content }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message || error);
    }
});
