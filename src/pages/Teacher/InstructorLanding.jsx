"use client";

import * as React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// Create a custom theme with the specified color
const theme = createTheme({
  palette: {
    primary: {
      main: "#3cacae",
    },
  },
  typography: {
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      textAlign: "center",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "1.5rem",
      textAlign: "center",
      fontWeight: 400,
      color: "#666",
      marginTop: "1rem",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },
  },
});

export default function InstructorLanding() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        {/* Main Content */}
        <Container
          maxWidth="md"
          sx={{
            mt: { xs: 8, md: 12 },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            px: { xs: 2, sm: 4 },
          }}
        >
          <Typography variant="h1" component="h1">
            Become an instructor today
          </Typography>

          <Typography variant="h2" component="h2">
            Join one of the world&apos;s largest online learning marketplaces.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,
              px: 6,
              py: 1.5,
              fontSize: "1.1rem",
              textTransform: "none",
              backgroundColor: "#3cacae",
              "&:hover": {
                backgroundColor: "#2b9294",
              },
            }}
          >
            Get started
          </Button>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
