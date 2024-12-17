"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CourseCard from "../card/CourseCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllDataUsingSearch } from "../../services/services";

const ViewAllButton = styled(Button)(({ theme }) => ({
  color: "#3cacae",
  "&:hover": {
    backgroundColor: "rgba(60, 172, 174, 0.04)",
  },
}));

export default function CoursesSection() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]); // State to hold all courses
  const handleCardClick = () => {
    navigate("/CourseDetails");
  };

  useEffect(() => {
    const payLoad = {
      data: { filter: "" },
      page: 0,
      pageSize: 8,
      order: [["createdAt", "ASC"]],
    };

    // Fetch courses from the backend
    getAllDataUsingSearch(payLoad).then((res) => {
      console.log("Fetched Courses:", res);
      setCourses(res?.data?.data?.rows || []);
    });
  }, []);

  // Helper function to filter courses by category
  const filterByCategory = (category) => {
    return courses.filter((course) => course.category === category);
  };

  // Helper function to render a course section
  const renderCourseSection = (title, filteredCourses) => (
    <>
      {/* Section Title */}
      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="h2" sx={{ color: "#ff6b6b" }}>
          {title}
        </Typography>
        <ViewAllButton
          onClick={() => navigate(`/courses?category=${title.toLowerCase()}`)}
          endIcon={<ArrowForwardIcon />}
        >
          View All
        </ViewAllButton>
      </Box>

      {/* Course Grid */}
      <Grid container spacing={3}>
        {filteredCourses.map((course) => (
          <Grid
            item
            key={course.id}
            xs={12}
            md={6}
            lg={4}
            onClick={() => handleCardClick()}
          >
            <CourseCard
              image={course.cousePreviewImg || "images/default-image.jpeg"}
              title={course.title}
              description={course.description}
              price={course.price}
              originalPrice={course.originalPrice}
              selfPaced={course.isCourse} // Adjust as per your course logic
            />
          </Grid>
        ))}
      </Grid>
    </>
  );

  return (
    <Box sx={{ backgroundColor: "white", py: 6 }}>
      <Container maxWidth="lg">
        {/* Main Title */}
        <Box
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: "bold", color: "#1a1a1a" }}
          >
            Our Courses
          </Typography>
        </Box>

        {/* Programming Section */}
        {renderCourseSection("Programming", filterByCategory("Programming"))}

        <Divider sx={{ my: 6 }} />

        {/* Data Analyst Section */}
        {renderCourseSection("Data Analyst", filterByCategory("Data Analyst"))}

        <Divider sx={{ my: 6 }} />

        {/* Other Section */}
        {renderCourseSection("Other", filterByCategory("Other"))}
      </Container>
    </Box>
  );
}
