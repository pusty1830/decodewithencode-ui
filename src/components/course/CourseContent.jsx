"use client";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import LockIcon from "@mui/icons-material/Lock";

const courseSections = [
  {
    id: 1,
    title: "ChatGPT Complete Guide Introduction",
    totalDuration: "6min",
    lectures: [
      {
        id: 1,
        title: "Start Here First (Important Course Details)",
        duration: "03:28",
        preview: true,
      },
      {
        id: 2,
        title: "Meet Your Instructors",
        duration: "01:39",
        locked: true,
      },
      {
        id: 3,
        title: "Sneak Peak of What's to Come!",
        duration: "01:22",
        preview: true,
      },
    ],
  },
  {
    id: 2,
    title: "ChatGPT: Fundamentals and 150+ Prompting Ideas for ChatGPT",
    totalDuration: "47min",
    lectures: [
      {
        id: 4,
        title: "Introduction to ChatGPT",
        duration: "05:22",
        locked: true,
      },
      {
        id: 5,
        title: "Basic Prompting Techniques",
        duration: "08:15",
        locked: true,
      },
    ],
  },
  // Add more sections as needed
];

export default function CourseContent() {
  return (
    <Box sx={{ maxWidth: "100%", bgcolor: "background.paper" }}>
      <Box sx={{ p: 3, borderBottom: 1, borderColor: "divider" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ mb: 2, fontWeight: "bold", color: "#3cacae" }}
        >
          Course content
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography color="text.secondary">
            45 sections • 430 lectures • 28h 11m total length
          </Typography>
          <Button
            sx={{
              color: "#3cacae",
              "&:hover": {
                bgcolor: "rgba(60, 172, 174, 0.08)",
              },
            }}
          >
            Expand all sections
          </Button>
        </Box>
      </Box>

      {courseSections.map((section) => (
        <Accordion key={section.id} sx={{ "&:before": { display: "none" } }}>
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon />}
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.02)",
              borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
              "&:hover": {
                backgroundColor: "rgba(60, 172, 174, 0.05)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: "medium" }}>
                {section.title}
              </Typography>
              <Typography color="text.secondary" sx={{ ml: 2 }}>
                {section.lectures.length} lectures • {section.totalDuration}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <List disablePadding>
              {section.lectures.map((lecture) => (
                <ListItem
                  key={lecture.id}
                  sx={{
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                    "&:hover": {
                      backgroundColor: "rgba(60, 172, 174, 0.05)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {lecture.locked ? (
                      <LockIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <PlayCircleIcon className="h-5 w-5 text-[#3cacae]" />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={lecture.title}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                  <ListItemSecondaryAction
                    sx={{ display: "flex", gap: 2, alignItems: "center" }}
                  >
                    {lecture.preview && (
                      <Button
                        size="small"
                        sx={{
                          color: "#3cacae",
                          "&:hover": {
                            bgcolor: "rgba(60, 172, 174, 0.08)",
                          },
                        }}
                      >
                        Preview
                      </Button>
                    )}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ minWidth: 45, textAlign: "right" }}
                    >
                      {lecture.duration}
                    </Typography>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
