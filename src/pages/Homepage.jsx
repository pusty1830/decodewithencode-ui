import React, { useState, useEffect } from "react";
import { isLoggedIn } from "../services/axiosClient";
import { getProfile } from "../services/services";
import StudentHomepage from "./StudentHomepage";
import TeacherHomepage from "./Teacher/TeacherHomepage";
import MentorHomepage from "./Mentor/MentorHomepage";

const Homepage = () => {
  const [role, setRole] = useState("");

  useEffect(() => {
    if (isLoggedIn()) {
      getProfile()
        .then((res) => {
          console.log(res?.data?.data?.role);
          setRole(res?.data?.data?.role);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("You are not logged in");
    }
  }, []);

  const renderHomepage = () => {
    switch (role) {
      case "User":
        return <StudentHomepage />;
      case "Teacher":
        return <TeacherHomepage />;
      case "Mentor":
        return <MentorHomepage />;
      default:
        return <StudentHomepage />;
    }
  };

  return <>{renderHomepage()}</>;
};

export default Homepage;
