"use client";

import { Box, Container, Typography } from "@mui/material";

export default function EnroledStudents() {
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
          Students
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
            No Student Enrolled yet!
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
        </Box>
      </Container>
    </Box>
  );
}
