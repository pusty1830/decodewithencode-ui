import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./components/shared/AuthLayout";
import "./App.css";
import Homepage from "./pages/Homepage";
import Courses from "./pages/courses/Course";
import Mentor from "./pages/Mentor/Mentor";
import MyCourses from "./pages/Mycourses/MyCourses";
import MyPurches from "./pages/purchases/MyPurches";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
