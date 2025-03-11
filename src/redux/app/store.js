import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/slices/authSlice";
import categoryReducer from "../features/slices/categorySlice";
import gradeReducer from "../features/slices/gradeSlice";
import classReducer from "../features/slices/classSlice";
import subjectReducer from "../features/slices/subjectSlice";
import teacherReducer from "../features/slices/teacherSlice";
import lessonReducer from "../features/slices/lessonSlice";
import postReducer from "../features/slices/postSlice";
import testReducer from "../features/slices/testSlice";
import notificationReducer from "../features/slices/notificationSlice";
import profileReducer from "../features/slices/profileSlice";
import contactReducer from "../features/slices/contactSlice";
import memoReducer from "../features/slices/memoSlice";


import settingReducer from "../features/slices/settingSlice";

import faqReducer from "../features/slices/faqSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoryReducer,
    grades: gradeReducer,
    classes: classReducer,
    subjects: subjectReducer,
    teachers: teacherReducer,
    lessons: lessonReducer,
    posts: postReducer,
    tests: testReducer,
    notifications: notificationReducer,
    profile: profileReducer,
    contact: contactReducer,
    memos: memoReducer,
    settings:settingReducer,
    faq:faqReducer
  },
});

export default store;
