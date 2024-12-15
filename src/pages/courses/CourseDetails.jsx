import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  CardMedia,
} from "@mui/material";

const CourseDetails = () => {
  const course = {
    id: 1,
    title: "Decode Programming Powerhouse: C++, Java, Python & DSA Course",
    description:
      "Master C++, Java, Python, and DSA. Build essential programming skills, solve complex problems, and prepare for technical interviews. This course is ideal for beginners and intermediates looking to enhance their programming expertise.",
    image: "images/studentlearning.jpeg",
    price: "3,500",
    originalPrice: "4,999",
    selfPaced: true,
    startDate: "January 15, 2025",
    endDate: "April 15, 2025",
    duration: "3 Months",
    teachers: [
      { name: "John Doe", subject: "C++ and Data Structures" },
      { name: "Jane Smith", subject: "Java Programming" },
      { name: "Alex Johnson", subject: "Python and Algorithms" },
    ],
    videos: [
      { id: 1, title: "Introduction to C++", url: "https://via.placeholder.com/400x200" },
      { id: 2, title: "Java Basics", url: "https://via.placeholder.com/400x200" },
      { id: 3, title: "Python Essentials", url: "https://via.placeholder.com/400x200" },
      { id: 4, title: "Data Structures Overview", url: "https://via.placeholder.com/400x200" },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        minHeight: "100vh",
        padding: 4,
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5", // Light gray background
          padding: 4,
          borderRadius: 4,
          marginBottom: 4,
        }}
      >
        <Card
          sx={{
            maxWidth: 900,
            margin: "auto",
            borderRadius: 4,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardMedia
            component="img"
            alt="Student Learning"
            image={course.image}
            sx={{
              height: 200, // Reduced height
              width: "100%",
              objectFit: "cover",
              borderRadius: "4px 4px 0 0",
            }}
          />
          <CardContent>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#3cacae",
              }}
            >
              {course.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: 2,
                textAlign: "center",
                color: "#333",
              }}
            >
              {course.description}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Course Details Section */}
      <Box
        sx={{
          backgroundColor: "#3cacae", // Accent color
          color: "white",
          padding: 4,
          borderRadius: 4,
          marginBottom: 4,
        }}
      >
        <Card
          sx={{
            maxWidth: 900,
            margin: "auto",
            backgroundColor: "white",
            color: "#3cacae",
            borderRadius: 4,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>Start Date:</strong> {course.startDate}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>End Date:</strong> {course.endDate}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>Duration:</strong> {course.duration}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1">
                  <strong>Self-Paced:</strong> {course.selfPaced ? "Yes" : "No"}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="h6" sx={{ marginTop: 3 }}>
              Teachers
            </Typography>
            <ul>
              {course.teachers.map((teacher, index) => (
                <li key={index}>
                  <Typography variant="body2">
                    {teacher.name} - {teacher.subject}
                  </Typography>
                </li>
              ))}
            </ul>

            {/* Price Section */}
            <Box
              sx={{
                marginTop: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                ₹{course.price}{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "gray",
                    fontSize: "1rem",
                  }}
                >
                  ₹{course.originalPrice}
                </span>
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3cacae",
                  color: "white",
                  "&:hover": { backgroundColor: "#36989a" },
                  fontWeight: "bold",
                }}
              >
                Enroll Now
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Horizontal Video Scroll */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5", // Light gray for the video section
          padding: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h6" sx={{ color: "#3cacae", marginBottom: 2 }}>
          Course Videos
        </Typography>
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 2,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {course.videos.map((video) => (
            <Card
              key={video.id}
              sx={{
                minWidth: 300,
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <CardMedia
                component="img"
                alt={video.title}
                image={video.url}
                sx={{ height: 150, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="subtitle1" sx={{ color: "#3cacae" }}>
                  {video.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CourseDetails;
