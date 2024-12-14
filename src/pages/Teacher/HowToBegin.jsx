"use client";

import {
  Box,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Grid,
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
});

const StyledStepper = styled(Stepper)(({ theme }) => ({
  ".MuiStepLabel-label": {
    fontSize: "1.25rem",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  ".MuiStepIcon-root": {
    color: theme.palette.primary.main,
    "&.Mui-active": {
      color: theme.palette.primary.main,
    },
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(4),
  },
}));

const IllustrationWrapper = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  height: "auto",
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(4),
  },
}));

export default function HowToBegin() {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const steps = [
    "Plan your curriculum",
    "Record your video",
    "Launch your course",
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ py: 8, backgroundColor: "white" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 6,
              color: "text.primary",
            }}
          >
            How to begin
          </Typography>

          <StyledStepper
            activeStep={0}
            alternativeLabel={isMobile}
            orientation={isMobile ? "vertical" : "horizontal"}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </StyledStepper>

          <ContentSection>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ pr: { md: 4 } }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Start with your passion
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ color: "text.secondary", mb: 3 }}
                  >
                    You start with your passion and knowledge. Then choose a
                    promising topic with the help of our Marketplace Insights
                    tool.
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ color: "text.secondary", mb: 4 }}
                  >
                    The way that you teach — what you bring to it — is up to
                    you.
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    How we help you
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    We offer plenty of resources on how to create your first
                    course. And, our instructor dashboard and curriculum pages
                    help keep you organized.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <IllustrationWrapper>
                  <Box
                    component="img"
                    src="/images/becomean instructor.jpeg"
                    alt="Teacher working on course"
                    sx={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "500px",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                </IllustrationWrapper>
              </Grid>
            </Grid>
          </ContentSection>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
