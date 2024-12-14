import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./components/shared/AuthLayout";
import "./App.css";
import Homepage from "./pages/Homepage";
import Courses from "./pages/courses/Course";
import Mentor from "./pages/Mentor/Mentor";
import MyCourses from "./pages/Mycourses/MyCourses";
import MyPurches from "./pages/purchases/MyPurches";
import LoginPage from "./pages/Authpages/Login/Login";
import RegisterPage from "./pages/Authpages/Signup/Register";
import Resources from "./pages/Resources/Resources";
import AddCoursePage from "./pages/Teacher/AddCoursePage";
import MyCourse from "./pages/Teacher/MyCourse";
import EditCourse from "./pages/Teacher/EditCourse";
import EnroledStudents from "./pages/Teacher/EnroledStudents";
import Payments from "./pages/Teacher/Payments";
import VerifyPage from "./pages/Authpages/Signup/VerifyPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notification from "./pages/Notification";
import TeacherHomepage from "./pages/Teacher/TeacherHomepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/mentor" element={<Mentor />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/payments" element={<MyPurches />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/add-course" element={<AddCoursePage />} />
            <Route path="/my-course" element={<MyCourse />} />
            <Route path="/update-courses" element={<EditCourse />} />
            <Route path="/enrolled-students" element={<EnroledStudents />} />
            <Route path="/earnings-teacher" element={<Payments />} />
            <Route path="/verify-email" element={<VerifyPage />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/teacher-homepage" element={<TeacherHomepage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
