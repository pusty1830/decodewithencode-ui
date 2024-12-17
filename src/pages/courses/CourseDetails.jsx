import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Rating,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CourseContent from "../../components/course/CourseContent";

const CourseDetails = () => {
  // Array for 'What You'll Learn'
  const learnPoints = [
    "Build modern React applications from scratch.",
    "Develop scalable RESTful APIs using Node.js and Express.",
    "Store and manage data using MongoDB and Mongoose.",
    "Integrate frontend and backend seamlessly.",
  ];

  // Array for 'This Course Includes'
  const courseIncludes = [
    "10 hours of video content",
    "Certificate of completion",
    "Downloadable resources",
    "Access on mobile and TV",
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        minHeight: "100vh",
        py: 4,
        px: { xs: 2, md: 6 },
      }}
    >
      {/* Course Header */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#3cacae"
            gutterBottom
          >
            Full Stack Web Development Masterclass
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Learn to build dynamic websites using React, Node.js, Express, and
            MongoDB from scratch!
          </Typography>
          <Box display="flex" alignItems="center" mt={2}>
            <Rating value={4.5} precision={0.5} readOnly />
            <Typography variant="body1" ml={1}>
              4.5 (2,345 ratings) | 10,000+ students
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Created by <strong>John Doe</strong>
          </Typography>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              backgroundColor: "#3cacae",
              color: "#fff",
              borderRadius: 2,
              p: 2,
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              image="https://via.placeholder.com/350x200"
              alt="Course Image"
              sx={{ borderRadius: 2 }}
            />
            <CardContent>
              <Button
                variant="contained"
                fullWidth
                startIcon={<PlayCircleOutlineIcon />}
                sx={{
                  bgcolor: "#fff",
                  color: "#3cacae",
                  fontWeight: "bold",
                  "&:hover": { bgcolor: "#f0f0f0" },
                }}
              >
                Enroll Now
              </Button>
              <Typography variant="h6" mt={2}>
                This Course Includes:
              </Typography>
              <Box mt={1}>
                {courseIncludes.map((item, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    display="flex"
                    alignItems="center"
                  >
                    <CheckCircleOutlineIcon fontSize="small" sx={{ mr: 1 }} />
                    {item}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Course Details */}
      <Divider sx={{ my: 4 }} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" fontWeight="bold" color="#3cacae">
            What You'll Learn
          </Typography>
          <Box mt={2}>
            {learnPoints.map((point, index) => (
              <Typography key={index} variant="body1" mb={1}>
                - {point}
              </Typography>
            ))}
          </Box>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <CourseContent />
      </Grid>
    </Box>
  );
};

export default CourseDetails;
