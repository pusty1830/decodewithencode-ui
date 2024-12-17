"use client";

import { useEffect, useState } from "react";
import { Box, Container, Typography, Tabs, Tab, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import CourseCard from "../../components/card/CourseCard";
import { useNavigate } from "react-router-dom";
import CourseDetails from "./CourseDetails";
import { getCourse } from "../../services/services";
// Sample course data
// const courses = [
//   {
//     id: 1,
//     title: "Decode Programming Powerhouse: C++, Java, Python & DSA Course",
//     description:
//       "Master C++, Java, Python, and DSA. Build essential programming skills, solve complex problems, and prepare for technical interviews.",
//     image: "images/studentlearning.jpeg",
//     price: "3,500",
//     originalPrice: "4,999",
//     selfPaced: true,
//   },
//   {
//     id: 2,
//     title: "Decode C++ with DSA Course",
//     description:
//       "Gain expertise in C++ syntax & DSA principles for robust coding skills. Enroll now!",
//     image: "images/studentlearning.jpeg",
//     price: "3,500",
//     originalPrice: "4,999",
//     selfPaced: true,
//   },
//   {
//     id: 3,
//     title: "Decode C++ with DSA Course",
//     description:
//       "Gain expertise in C++ syntax & DSA principles for robust coding skills. Enroll now!",
//     image: "images/studentlearning.jpeg",
//     price: "3,500",
//     originalPrice: "4,999",
//     selfPaced: true,
//   },
//   {
//     id: 4,
//     title: "Decode C++ with DSA Course",
//     description:
//       "Gain expertise in C++ syntax & DSA principles for robust coding skills. Enroll now!",
//     image: "images/studentlearning.jpeg",
//     price: "3,500",
//     originalPrice: "4,999",
//     selfPaced: true,
//   },
// ];

// Custom styled components
const StyledTab = styled(Tab)({
  textTransform: "none",
  fontWeight: 500,
  fontSize: "1rem",
  color: "#666",
  "&.Mui-selected": {
    color: "#3cacae",
  },
});

export default function Courses() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleCardClick = () => {
    navigate("/CourseDetails");
  };

  // Handle opening and closing the modal

  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourse({
      fieldName: "isCourse",
      fieldValue: true,
    })
      .then((res) => {
        setCourses(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(courses.cousePreviewImg);

  return (
    <Box sx={{ bgcolor: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "#1a1a1a",
              fontSize: { xs: "2rem", md: "2.5rem" },
              mb: 2,
            }}
          >
            Choose Your Program
          </Typography>
          <Box
            sx={{
              width: "100%",
              borderBottom: 1,
              borderColor: "divider",
              mb: 4,
            }}
          >
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#3cacae",
                },
              }}
            >
              {/* <StyledTab label="JAVA" />
              <StyledTab label="Python" />
              <StyledTab label="Paid" />
              <StyledTab label="Trending" /> */}
              <StyledTab label="All Courses" />
            </Tabs>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {courses.map((course) => (
            <Grid
              item
              xs={12}
              md={6}
              key={course.id}
              onClick={() => handleCardClick()}
            >
              <CourseCard
                image={course.cousePreviewImg}
                title={course.title}
                description={course.description}
                price={course.price}
                // originalPrice={course.originalPrice}
                selfPaced={course.selfPaced}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
