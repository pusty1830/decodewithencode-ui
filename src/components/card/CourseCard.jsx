"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
  Chip,
  Grid,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SchoolIcon from "@mui/icons-material/School";

export default function CourseCard({
  image,
  title,
  // teachers,
  // localRating = 4,
  // globalRating = 4.5,
  duration = "10 Weeks",
  level = "Beginner",
  price,
}) {
  return (
    <Card
      className="h-full transition-all duration-300 hover:translate-y-[-4px]"
      sx={{
        maxWidth: 345,
        backgroundColor: "white",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        sx={{
          height: 140,
          backgroundColor: "#3cacae",
          backgroundBlendMode: "multiply",
        }}
      />

      <CardContent sx={{ p: 3 }}>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontSize: "1.25rem",
            fontWeight: "600",
            mb: 2,
            color: "#1a1a1a",
          }}
        >
          {title}
        </Typography>

        {/* <Typography variant="subtitle2" sx={{ mb: 2, color: "#666" }}>
          Teachers:
        </Typography>
        <Grid container spacing={1} sx={{ mb: 3 }}>
          {teachers.map((teacher, index) => (
            <Grid item xs={6} key={index}>
              <Typography variant="body2" sx={{ color: "#444" }}>
                {index + 1}. {teacher}
              </Typography>
            </Grid>
          ))}
        </Grid> */}

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          {/* <Box>
            <Typography
              variant="caption"
              sx={{ color: "#666", display: "block", mb: 0.5 }}
            >
              Local rating
            </Typography>
            <Rating value={localRating} readOnly size="small" />
          </Box> */}
          {/* <Box>
            <Typography
              variant="caption"
              sx={{ color: "#666", display: "block", mb: 0.5 }}
            >
              Global rating
            </Typography>
            <Rating value={globalRating} readOnly size="small" />
          </Box> */}
        </Box>

        <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
          <Chip
            icon={<SchoolIcon className="h-4 w-4" />}
            label={level}
            size="small"
            sx={{
              backgroundColor: "rgba(60, 172, 174, 0.1)",
              color: "#3cacae",
              "& .MuiChip-icon": { color: "#3cacae" },
            }}
          />
          <Chip
            icon={<AccessTimeIcon className="h-4 w-4" />}
            label={duration}
            size="small"
            sx={{
              backgroundColor: "rgba(60, 172, 174, 0.1)",
              color: "#3cacae",
              "& .MuiChip-icon": { color: "#3cacae" },
            }}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            color: "#3cacae",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          Price ${price}
        </Typography>
      </CardContent>
    </Card>
  );
}
