// CourseCard.jsx
import React from "react";
// import PropTypes from "prop-types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import color from "../utils/Colors";

const CourseCard = ({
  image,
  title,
  description,
  price,
  originalPrice,
  selfPaced,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        "&:hover": {
          boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={title}
        sx={{
          bgcolor: "primary.main",
          backgroundBlendMode: "multiply",
        }}
      />
      {selfPaced && (
        <Chip
          label="Selfpaced"
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            bgcolor: "#8B5CF6",
            color: "white",
            fontWeight: 500,
          }}
        />
      )}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: "bold",
              fontSize: "1.25rem",
              mb: 2,
              flex: 1,
              pr: 2,
            }}
          >
            {title}
          </Typography>
          <ArrowForward sx={{ color: "#3cacae" }} />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            component="span"
            sx={{
              textDecoration: "line-through",
              color: "text.secondary",
            }}
          >
            ₹{originalPrice}
          </Typography>
          <Chip label={`₹${price}`} color={color.firstColor} />
        </Box>
      </CardContent>
    </Card>
  );
};

// CourseCard.propTypes = {
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
//   price: PropTypes.number.isRequired,
//   originalPrice: PropTypes.number,
//   selfPaced: PropTypes.bool,
// };

export default CourseCard;
