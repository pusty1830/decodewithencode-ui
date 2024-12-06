import React from "react";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Rating,
  Chip,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  borderRadius: "12px",
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

const MentorAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  border: `3px solid #3cacae`,
}));

const ScheduleChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "#3cacae",
  color: "white",
  fontWeight: "bold",
  margin: "4px",
}));

const ViewScheduleButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#3cacae",
  color: "white",
  "&:hover": {
    backgroundColor: "#2b8a8c",
  },
}));

// MentorCard Component
const MentorCard = ({ mentor }) => {
  return (
    <StyledCard>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <MentorAvatar src={mentor.image} alt={mentor.name} />
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: "bold",
            color: "#1a1a1a",
            textAlign: "center",
          }}
        >
          {mentor.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", mb: 1 }}
        >
          {mentor.description}
        </Typography>
        <Rating value={mentor.rating} precision={0.1} readOnly />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "#3cacae",
          }}
        >
          <AccessTimeIcon />
          <Typography variant="body2">
            Next Available: {mentor.nextAvailable}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <CalendarTodayIcon sx={{ color: "#3cacae" }} />
          {mentor.upcomingDates.map((date, index) => (
            <ScheduleChip key={index} label={date} size="small" />
          ))}
        </Box>
        <ViewScheduleButton variant="contained" fullWidth>
          Schedule A Meeting
        </ViewScheduleButton>
      </CardContent>
    </StyledCard>
  );
};

export default MentorCard;
