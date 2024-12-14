import React from "react";
import HeroSection from "../components/Homepage/HeroSection";
import CoursesSection from "../components/Homepage/CourseSection";
import MentorSchedule from "../components/Homepage/MentorSchudle";
import Faq from "../components/Homepage/Faq";

const StudentHomepage = () => {
  return (
    <div>
      <HeroSection />
      <CoursesSection />
      <MentorSchedule />
      <Faq />
    </div>
  );
};

export default StudentHomepage;
