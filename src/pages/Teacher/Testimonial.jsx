"use client";

import { useState } from "react";
import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Create custom theme with the specified color
const theme = createTheme({
  palette: {
    primary: {
      main: "#3cacae",
    },
  },
});

const testimonials = [
  {
    id: 1,
    quote:
      "Decode with Encode has changed my life. It's allowed me to follow my passion and become a teacher I love to see my students succeed and hear them say they've learned more, quicker, from my courses than they did in college. It's so humbling.",
    author: "Paulo Dichone",
    title: "Developer (Android Speciality)",
    image: "/images/dummymentor.jpg",
  },
  {
    id: 2,
    quote:
      "Teaching on this platform has been an incredible journey. The impact we can have on students worldwide is truly remarkable.",
    author: "Sarah Johnson",
    title: "Web Development Instructor",
    image: "/images/dummymentor.jpg",
  },
  {
    id: 3,
    quote:
      "The ability to reach and help students from all over the world is what makes this platform special.",
    author: "Michael Chen",
    title: "Data Science Expert",
    image: "/images/dummymentor.jpg",
  },
];

const NavigationButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
}));

const TestimonialSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: "white",
  position: "relative",
  overflow: "hidden",
}));

const TestimonialContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    gap: theme.spacing(4),
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: "400px",
  height: "400px",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    width: "300px",
    height: "300px",
  },
}));

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <TestimonialSection>
        <Container maxWidth="lg">
          <TestimonialContent>
            <ImageWrapper>
              <Box
                component="img"
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </ImageWrapper>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                component="blockquote"
                sx={{
                  fontStyle: "italic",
                  mb: 3,
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  lineHeight: 1.4,
                }}
              >
                "{testimonials[currentIndex].quote}"
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                {testimonials[currentIndex].author}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {testimonials[currentIndex].title}
              </Typography>
            </Box>
          </TestimonialContent>
        </Container>

        <NavigationButton
          onClick={handlePrevious}
          sx={{ left: { xs: 4, md: 32 } }}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </NavigationButton>
        <NavigationButton
          onClick={handleNext}
          sx={{ right: { xs: 4, md: 32 } }}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </NavigationButton>
      </TestimonialSection>
    </ThemeProvider>
  );
}
