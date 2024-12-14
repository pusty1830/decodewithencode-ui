"use client";

import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Create custom theme with the specified color
const theme = createTheme({
  palette: {
    primary: {
      main: "#3cacae",
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      color: "#2D2D2D",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    subtitle1: {
      fontSize: "1.25rem",
      color: "#4A4A4A",
      lineHeight: 1.5,
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
  },
});

const HeroButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  padding: "12px 32px",
  fontSize: "1.125rem",
  textTransform: "none",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  "@media (max-width:600px)": {
    padding: "10px 24px",
    fontSize: "1rem",
  },
}));

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "50%",
  paddingRight: "2rem",
  "@media (max-width:900px)": {
    maxWidth: "100%",
    padding: "2rem",
    textAlign: "center",
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: 0,
  top: 0,
  height: "100%",
  width: "50%",
  "@media (max-width:900px)": {
    display: "none",
  },
}));

export default function TeacherHero() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <HeroSection>
        <Container maxWidth="lg">
          <ContentWrapper>
            <Typography variant="h1" component="h1" gutterBottom>
              Come teach with us
            </Typography>
            <Typography variant="subtitle1" paragraph sx={{ mb: 4 }}>
              Become an instructor and change lives — including your own
            </Typography>
            <HeroButton variant="contained" size="large">
              Get started
            </HeroButton>
          </ContentWrapper>
        </Container>
        <ImageWrapper>
          <Box
            component="img"
            src="/images/girlwithcomp.jpeg"
            alt="Teacher"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "fit",
              objectPosition: "center",
            }}
          />
        </ImageWrapper>
      </HeroSection>
    </ThemeProvider>
  );
}
