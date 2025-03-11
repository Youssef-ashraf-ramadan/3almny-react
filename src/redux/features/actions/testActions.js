import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from './../../../api/baseURL';

// الاختبارات  
// جلب جميع السؤال والجواب الخاصة بالطالب
export const fetchAllTests = createAsyncThunk("tests/fetch", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token"); // استرجاع التوكن من localStorage
    const studentId = localStorage.getItem("id"); // استرجاع معرف الطالب من localStorage

    if (!token || !studentId) {
      throw new Error("Token or student ID is missing.");
    }

    const res = await baseUrl.get(`tests/student_tests?student_id=${studentId}`, { 
      headers: { Authorization: `Bearer ${token}` } 
    });

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});

// الاختبارات حسب المادة
export const fetchBySubjectTests = createAsyncThunk("tests/subjects/fetch", async (subjectId, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token; // Retrieve token
    const res = await baseUrl.get(`/tests/my_tests?subject_id=${subjectId}`, { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});

// الامتحانات السابقة الي دخلها
export const fetchMyTests = createAsyncThunk("tests/myTests", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.token; // Retrieve token
    const res = await baseUrl.get("/my-tests", { headers: { Authorization: `Bearer ${token}` } });
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});









/////////////////////////////////////////////////////////////////////////////////////////////


export const fetchStudentTests = createAsyncThunk("tests/stu", async (id=null, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const res = await baseUrl.get(`/tests/all_tests`, { headers: { Authorization: `Bearer ${token}` } });
    console.log(res.data);
    
    return res.data;
  } catch (error) {
return thunkAPI.rejectWithValue(
        error.response?.data?.errors || error.response?.data?.message || "حدث خطأ غير متوقع"
      );  }
});














export const submitTestAnswers = createAsyncThunk(
  "tests/submitAnswers",
  async ({ testId, answers }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await baseUrl.post(
        `/tests/answer_question`,
        {
          test_id: testId,
          questions_answers: answers,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.errors ||
          error.response?.data?.message ||
          "حدث خطأ غير متوقع"
      );
    }
  }
);




export const changeTestStatus = createAsyncThunk(
  "tests/changeStatus",
  async (testId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await baseUrl.post(
        `/tests/change_student_test_status`,
        { test_id: testId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.errors ||
          error.response?.data?.message ||
          "حدث خطأ غير متوقع"
      );
    }
  }
);




export const getTestById = createAsyncThunk(
  "test/byId",
  async (testId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await baseUrl.get(
        `/tests/test/${testId}`,
        
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.errors ||
          error.response?.data?.message ||
          "حدث خطأ غير متوقع"
      );
    }
  }
);