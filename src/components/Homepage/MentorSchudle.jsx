"use client";
import MentorCard from "../card/MentorCard";
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ViewAllButton = styled(Button)(({ theme }) => ({
  color: "#3cacae",
  "&:hover": {
    backgroundColor: "rgba(60, 172, 174, 0.04)",
  },
}));

const mentors = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    image: "images/dummymentor.jpg",
    description: "Expert in Data Science and Machine Learning",
    rating: 4.8,
    nextAvailable: "Today, 3:00 PM",
    upcomingDates: ["Mon", "Wed", "Fri"],
  },
  {
    id: 2,
    name: "Prof. John Doe",
    image: "images/dummymentor.jpg",
    description: "Specialist in Big Data Analytics",
    rating: 4.9,
    nextAvailable: "Tomorrow, 10:00 AM",
    upcomingDates: ["Tue", "Thu", "Sat"],
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    image: "images/dummymentor.jpg",
    description: "AI and Deep Learning Expert",
    rating: 4.7,
    nextAvailable: "Today, 5:00 PM",
    upcomingDates: ["Mon", "Tue", "Thu"],
  },
];

export default function MentorSchedule() {
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
            Mentors
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
            All Mentors
          </Typography>
          <ViewAllButton endIcon={<ArrowForwardIcon />}>View All</ViewAllButton>
        </Box>

        <Grid container spacing={3}>
          {mentors.map((mentor) => (
            <Grid item key={mentor.id} xs={12} sm={6} md={4}>
              <MentorCard mentor={mentor} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
