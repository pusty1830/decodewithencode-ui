"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
const values = ["<PRACTCAL|>", "<INNOVATIVE|>", "<EFFECTIVE|>", "<ENGAGING|>"];
const stats = [
  { value: "55%", label: "Average Salary Hike" },
  { value: "600+", label: "Different Courses" },
  { value: "12000+", label: "Career Transitions" },
  { value: "400+", label: "Industry Experts" },
];

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 2000); // Change text every 2 seconds

    return () => clearTimeout(interval); // Clean up timeout
  }, [currentIndex]);

  return (
    <Box sx={{ bgcolor: "white", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{ py: { xs: 4, md: 8 } }}
        >
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  //   bgcolor: "#3cacae",
                  color: "black",
                  //   p: 2,
                  //   display: "inline-block",
                  mb: 2,
                  fontSize: { xs: "2rem", md: "2.7rem" },
                }}
              >
                Stay Ahead Of The Curve
              </Typography>
              <Typography
                variant="h3"
                sx={{ mb: 2, fontSize: { xs: "1.75rem", md: "2.5rem" } }}
              >
                With Our{" "}
                <Box component="span" sx={{ color: "#3cacae" }}>
                  {values[currentIndex]}
                </Box>{" "}
                Courses
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, color: "text.secondary" }}
              >
                Decode with Encode is your one-stop-shop for upscaling. Get
                maximum value for time and resources you invest, with job-ready
                courses & high-technology, available at the lowest cost.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#3cacae",
                  "&:hover": {
                    bgcolor: "#2b9799",
                  },
                  px: 4,
                  py: 2,
                  borderRadius: 2,
                }}
              >
                Explore Courses
              </Button>
            </Box>
          </Grid>

          {/* Right Column - Images */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "300px", md: "500px" },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "10%",
                  right: "0%",
                  width: "60%",
                  height: "auto",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="images/developerimage.jpeg"
                  alt="Developer workspace"
                  width={400}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "10%",
                  left: "0%",
                  width: "60%",
                  height: "auto",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="images/studentlearning.jpeg"
                  alt="Student learning"
                  width={400}
                  height={300}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Box>
          </Grid>

          {/* Stats Section */}
          <Grid item xs={12}>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h3"
                      sx={{ color: "#3cacae", fontWeight: "bold" }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
