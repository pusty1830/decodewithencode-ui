"use client";

import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CourseCard from "../card/CourseCard";

const ViewAllButton = styled(Button)(({ theme }) => ({
  color: "#3cacae",
  "&:hover": {
    backgroundColor: "rgba(60, 172, 174, 0.04)",
  },
}));

const courses = [
  {
    id: 1,
    title: "Decode C++ with DSA Course",
    description:
      "Gain expertise in C++ syntax & DSA principles for robust coding skills. Enroll now!",
    image: "images/studentlearning.jpeg",
    price: "3,500",
    originalPrice: "4,999",
    selfPaced: true,
  },
  {
    id: 2,
    title: "Decode C++ with DSA Course",
    description:
      "Gain expertise in C++ syntax & DSA principles for robust coding skills. Enroll now!",
    image: "images/studentlearning.jpeg",
    price: "3,500",
    originalPrice: "4,999",
    selfPaced: true,
  },
  {
    id: 3,
    title: "Decode C++ with DSA Course",
    description:
      "Gain expertise in C++ syntax & DSA principles for robust coding skills. Enroll now!",
    image: "images/studentlearning.jpeg",
    price: "3,500",
    originalPrice: "4,999",
    selfPaced: true,
  },
  // Add more courses as needed
];

export default function CoursesSection() {
  return (
    <Box sx={{ backgroundColor: "white", py: 6 }}>
      <Container maxWidth="lg">
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

        <Box
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="h2" sx={{ color: "#ff6b6b" }}>
            All Courses
          </Typography>
          <ViewAllButton endIcon={<ArrowForwardIcon />}>View All</ViewAllButton>
        </Box>

        <Grid container spacing={3}>
          {courses.map((course) => (
            <Grid item key={course.id} xs={12} md={6} lg={4}>
              {/* <StyledCard>
                <StatusChip
                  label={
                    course.status === "bestseller" ? "Bestseller" : "Popular"
                  }
                  className={course.status}
                />
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                />
                <PremiumBadge>Premium Offerings Available</PremiumBadge>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: "bold", color: "#1a1a1a" }}
                  >
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                  <Box sx={{ mt: "auto", pt: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#1a1a1a", fontWeight: 500 }}
                    >
                      {course.enrollmentStatus}
                    </Typography>
                  </Box>
                </CardContent>
              </StyledCard> */}
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
