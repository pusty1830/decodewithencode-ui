import React from "react";
import TeacherHero from "./TeacherHeroSection";
import FeaturesAndStats from "./FeatureAndStats";
import HowToBegin from "./HowToBegin";
import Testimonial from "./Testimonial";
import InstructorLanding from "./InstructorLanding";

const TeacherHomepage = () => {
  return (
    <div>
      <TeacherHero />
      <FeaturesAndStats />
      <HowToBegin />
      <Testimonial />
      <InstructorLanding />
    </div>
  );
};

export default TeacherHomepage;
