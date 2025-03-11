import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/home/home";
import UIComponents from "./components/UiComponent/Uicomponent";
import Footer from "./components/footer/Footer";
import LessonsPage from "./pages/lessons/lessons";
import Teachers from "./pages/teachers/teachers";
import SubjectsPage from "./pages/subjects/subjects";
import ExamPage from "./pages/exams/exam";
import CourseDetailsPage from "./pages/courseDetails/courseDetails";
import ContactPage from "./pages/contact/contact";
import QuestionAnswerPage from "./pages/QuestionAnswer/QustionAnswer";
import AnswersPages from "./pages/answers/Answers";
import StartExamPage from "./pages/StartExam/startExam";
import Register from "./pages/Register/register";
import RegisterData from "./pages/RegisterData/RegisterData";
import Login from "./pages/login/login";
import ProfilePage from "./pages/profile/profile";
import NotificationPage from "./pages/Notification/Notification";
import LessonsOnePage from "./pages/lessons/LessonsOnePage";
import TeacherLessons from './pages/teachers/TeacherLessons';



function AppLayout() {
  return (
    <>
      <Navbar />
      <UIComponents />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<LessonsPage />} />

        <Route path="/lessons/:id" element={<LessonsOnePage />} />


        <Route path="/lessons/teacher/:id" element={<TeacherLessons />} />


        <Route path="/teachers" element={<Teachers />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/exam" element={<ExamPage />} />
        <Route path="/course-details/:id" element={<CourseDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<QuestionAnswerPage />} />
        <Route path="/faq/:id" element={<AnswersPages />} />
        <Route path="/start-exam/:id" element={<StartExamPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/notification" element={<NotificationPage />} />

      </Routes>
      <Footer />
    </>
  );
}

function AuthLayout() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-data" element={<RegisterData />} />
    </Routes>
  );
}

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-data" element={<RegisterData />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
