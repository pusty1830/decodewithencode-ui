"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function MyPurches() {
  return (
    <Box sx={{ bgcolor: "white", py: 6, minHeight: "80vh" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "#1a1a1a",
            fontSize: { xs: "2.5rem", md: "3rem" },
            mb: { xs: 4, md: 6 },
          }}
        >
          My Purchases
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: 3,
            py: { xs: 4, md: 8 },
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 600,
              color: "#1a1a1a",
              fontSize: { xs: "1.75rem", md: "2rem" },
              mb: 2,
            }}
          >
            No Courses purchased yet!
          </Typography>

          <Box
            component="img"
            src="images/working.jpg"
            alt="Person working on laptop"
            sx={{
              width: "100%",
              maxWidth: "400px",
              height: "300px",
              objectFit: "contain",
              mb: 4,
            }}
          />

          <Typography
            sx={{
              color: "#666",
              fontSize: { xs: "1rem", md: "1.125rem" },
              maxWidth: "600px",
              mb: 4,
            }}
          >
            See our huge variety of career-oriented courses and start learning
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to="/courses"
            sx={{
              bgcolor: "#3cacae",
              color: "white",
              px: 6,
              py: 1.5,
              fontSize: "1.125rem",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#2b9799",
              },
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(60, 172, 174, 0.2)",
            }}
          >
            Enroll Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
