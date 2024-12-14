"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
  Container,
  Paper,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Notifications as NotificationsIcon,
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
} from "@mui/icons-material";

// Create a custom theme with the specified colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#3cacae",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const initialNotifications = [
  {
    id: 1,
    type: "info",
    message: "New feature available",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    type: "success",
    message: "Your profile has been updated",
    timestamp: "4 hours ago",
  },
  {
    id: 3,
    type: "warning",
    message: "Your subscription will expire soon",
    timestamp: "1 day ago",
  },
  {
    id: 4,
    type: "info",
    message: "Maintenance scheduled for tomorrow",
    timestamp: "2 days ago",
  },
];

export default function Notification() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDelete = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const getIcon = (type) => {
    switch (type) {
      case "info":
        return <InfoIcon color="primary" />;
      case "success":
        return <CheckCircleIcon color="success" />;
      case "warning":
        return <WarningIcon color="warning" />;
      default:
        return <NotificationsIcon color="primary" />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            marginBottom: 6,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
            <Typography
              component="h1"
              variant="h4"
              color="primary"
              gutterBottom
            >
              Notifications
            </Typography>
            <List>
              {notifications.map((notification, index) => (
                <React.Fragment key={notification.id}>
                  <ListItem
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleDelete(notification.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                  >
                    <ListItemIcon>{getIcon(notification.type)}</ListItemIcon>
                    <ListItemText
                      primary={notification.message}
                      secondary={
                        isMobile ? (
                          <React.Fragment>
                            <Typography variant="body2" color="text.secondary">
                              {notification.timestamp}
                            </Typography>
                          </React.Fragment>
                        ) : (
                          notification.timestamp
                        )
                      }
                    />
                  </ListItem>
                  {index < notifications.length - 1 && (
                    <Divider variant="inset" component="li" />
                  )}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
