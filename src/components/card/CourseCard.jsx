"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";

export default function CourseCard({
  image,
  title,
  description,
  price,
  originalPrice,
  selfPaced,
}) {
  return (
    <Card
      className="h-full flex flex-col relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg"
      sx={{
        backgroundColor: "white",
        borderRadius: "16px",
        border: "1px solid",
        borderColor: "rgba(60, 172, 174, 0.1)",
      }}
    >
      <div className="relative">
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          className="h-[200px] object-cover"
          sx={{
            backgroundColor: "#3cacae",
            backgroundBlendMode: "multiply",
          }}
        />
        {selfPaced && (
          <Chip
            label="Self-paced"
            size="small"
            className="absolute top-4 left-4"
            sx={{
              backgroundColor: "#3cacae",
              color: "white",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "#2b9698",
              },
            }}
          />
        )}
      </div>

      <CardContent className="flex-grow p-6">
        <Box className="flex justify-between items-start gap-4 mb-4">
          <Typography
            variant="h6"
            component="h3"
            className="font-bold text-xl leading-tight line-clamp-2"
            sx={{ color: "#1a1a1a" }}
          >
            {title}
          </Typography>
          <span className="p-2 rounded-full bg-[#3cacae]/10 hover:bg-[#3cacae]/20 transition-colors">
            <ArrowForward className="h-5 w-5 text-[#3cacae]" />
          </span>
        </Box>

        {description && (
          <Typography
            variant="body2"
            className="mb-4 line-clamp-2 text-gray-600"
          >
            {description}
          </Typography>
        )}

        <Box className="flex items-center gap-3">
          <Typography
            variant="h6"
            component="span"
            className="font-bold text-[#3cacae]"
          >
            ₹{price.toLocaleString()}
          </Typography>
          {originalPrice && originalPrice > price && (
            <Typography
              component="span"
              className="text-sm text-gray-500 line-through"
            >
              ₹{originalPrice.toLocaleString()}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
