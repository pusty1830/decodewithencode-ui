"use client";

import { Box, Container, Typography, Grid } from "@mui/material";
import MentorCard from "../../components/card/MentorCard";
// Sample course data
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

export default function Mentor() {
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
            Choose Your Mentor
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
