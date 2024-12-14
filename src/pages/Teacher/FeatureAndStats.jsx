"use client";

import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { School, Stars, EmojiEvents } from "@mui/icons-material";

// Create custom theme with the specified color
const theme = createTheme({
  palette: {
    primary: {
      main: "#3cacae",
    },
  },
});

const FeatureCard = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "12px",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  "& svg": {
    fontSize: "2.5rem",
    color: theme.palette.primary.main,
  },
}));

const StatsSection = styled(Box)(({ theme }) => ({
  backgroundColor: "#3cacae",
  padding: theme.spacing(6, 0),
  marginTop: theme.spacing(8),
  color: "white",
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
}));

export default function FeaturesAndStats() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 700,
            mb: 6,
          }}
        >
          So many reasons to start
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FeatureCard>
              <IconWrapper>
                <School />
              </IconWrapper>
              <Typography
                variant="h5"
                component="h3"
                fontWeight="bold"
                gutterBottom
              >
                Teach your way
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Publish the course you want, in the way you want, and always
                have control of your own content.
              </Typography>
            </FeatureCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <FeatureCard>
              <IconWrapper>
                <Stars />
              </IconWrapper>
              <Typography
                variant="h5"
                component="h3"
                fontWeight="bold"
                gutterBottom
              >
                Inspire learners
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Teach what you know and help learners explore their interests,
                gain new skills, and advance their careers.
              </Typography>
            </FeatureCard>
          </Grid>

          <Grid item xs={12} md={4}>
            <FeatureCard>
              <IconWrapper>
                <EmojiEvents />
              </IconWrapper>
              <Typography
                variant="h5"
                component="h3"
                fontWeight="bold"
                gutterBottom
              >
                Get rewarded
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Expand your professional network, build your expertise, and earn
                money on each paid enrollment.
              </Typography>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>

      <StatsSection>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={6} md={2.4}>
              <StatItem>
                <Typography
                  variant="h3"
                  component="div"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
                >
                  73M
                </Typography>
                <Typography variant="body1">Students</Typography>
              </StatItem>
            </Grid>
            <Grid item xs={6} md={2.4}>
              <StatItem>
                <Typography
                  variant="h3"
                  component="div"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
                >
                  75+
                </Typography>
                <Typography variant="body1">Languages</Typography>
              </StatItem>
            </Grid>
            <Grid item xs={6} md={2.4}>
              <StatItem>
                <Typography
                  variant="h3"
                  component="div"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
                >
                  1B
                </Typography>
                <Typography variant="body1">Enrollments</Typography>
              </StatItem>
            </Grid>
            <Grid item xs={6} md={2.4}>
              <StatItem>
                <Typography
                  variant="h3"
                  component="div"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
                >
                  180+
                </Typography>
                <Typography variant="body1">Countries</Typography>
              </StatItem>
            </Grid>
            <Grid item xs={12} md={2.4}>
              <StatItem>
                <Typography
                  variant="h3"
                  component="div"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
                >
                  16,000+
                </Typography>
                <Typography variant="body1">Enterprise customers</Typography>
              </StatItem>
            </Grid>
          </Grid>
        </Container>
      </StatsSection>
    </ThemeProvider>
  );
}
