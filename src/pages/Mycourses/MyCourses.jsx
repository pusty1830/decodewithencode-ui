"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import CourseCard from "../../components/card/CourseCard";
// Sample course data
const courses = [
  {
    id: 1,
    title: "Decode Programming Powerhouse: C++, Java, Python & DSA Course",
    description:
      "Master C++, Java, Python, and DSA. Build essential programming skills, solve complex problems, and prepare for technical interviews.",
    image: "images/studentlearning.jpeg",
    price: "3,500",
    originalPrice: "4,999",
    selfPaced: true,
  },
];

export default function MyCourses() {
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
            My Courses
          </Typography>
          <Box
            sx={{
              width: "100%",
              borderBottom: 1,
              borderColor: "divider",
              mb: 4,
            }}
          ></Box>
        </Box>

        <Grid container spacing={3}>
          {courses.map((course) => (
            <Grid item xs={12} md={6} key={course.id}>
              <CourseCard
                image={course.image}
                title={course.title}
                description={course.description}
                price={course.price}
                originalPrice={course.originalPrice}
                selfPaced={course.selfPaced}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
