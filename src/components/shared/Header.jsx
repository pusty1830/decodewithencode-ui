import {
  AppBar,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate, Link, useLocation } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import color from "../utils/Colors";
// import { isLoggedIn } from "../../services/axiosClient";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery("max-width:600px");

  return (
    <>
      <AppBar
        style={{ boxShadow: "none", background: color.headerBg }}
        position="sticky"
      >
        <Toolbar
          style={{
            overflow: "hidden",
            height: "55px",
            boxShadow: "0px 0px 15px rgba(0,0,0,0.15)",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            minHeight: "0px",
          }}
        >
          <Grid container style={{ height: "55px" }}>
            <Grid
              item
              md={4}
              xs={6}
              sm={4}
              textAlign="center"
              sx={{
                fontSize: { md: "16px", sm: "13px", xs: "13px" },
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "100%", // Ensure it matches the container height
                  display: "flex",
                  translate: isMobile ? "0 0" : "-20px 0", // Adjust translate values slightly for better spacing
                  gap: "10px",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  borderRadius: "0 22px 22px 0", // Simplified border-radius syntax
                  padding: "0 10px", // Add some padding for better spacing
                }}
              >
                <img
                  src="images/lms logo.jpeg"
                  alt="LMS Logo"
                  style={{
                    height: "40px",
                    width: "auto",
                    borderRadius: "50%",
                    objectFit: "contain",
                  }}
                />
                <Typography
                  sx={{
                    color: "#3cacae",
                    fontWeight: "bold",
                    fontSize: { md: "20px", sm: "20px", xs: "18px" },
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontFamily: "'Roboto', sans-serif",
                    background: "linear-gradient(90deg, #3cacae, #1f8a8c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {/* DECODE WITH ENCODE */}
                  DWE
                </Typography>
              </div>
            </Grid>

            <Grid
              item
              md={4}
              xs={0}
              sm={4}
              textAlign={"center"}
              sx={{
                fontSize: { md: "16px", sm: "13px", xs: "13px" },
                display: isMobile ? "none" : "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <TextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon
                        style={{ color: color.headerText }}
                      ></SearchIcon>
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                placeholder="Search Courses and Mentors "
                sx={{
                  height: "40px",
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    boxShadow: "10px -5px 15px rgba(0, 0, 0, 0.118) inset",
                    background: color.sidebarButton,
                    // border: 'solid 1.5px #2583e5',
                    color: color.headerText,
                    height: "40px",
                    overflow: "hidden",
                    outline: "none",
                    borderRadius: "12px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                    outline: "none",
                  },
                  "& input::placeholder": {
                    color: color.headerText,
                    opacity: 1,
                  },
                }}
              />
            </Grid>

            <Grid
              item
              md={4}
              xs={6}
              sm={4}
              textAlign={"center"}
              sx={{
                fontSize: {
                  md: "13px",
                  sm: "10px",
                  xs: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                },
              }}
            >
              <IconButton>
                <NotificationsIcon sx={{ color: "#3cacae" }} />
              </IconButton>
              <Avatar
                alt="Student Avatar"
                src="/path/to/student/avatar.jpg"
                sx={{
                  marginLeft: "10px",
                  width: 32,
                  height: 32,
                  color: "white",
                  backgroundColor: "#3cacae",
                }}
              />
              <Button
                onClick={() => {
                  // Login logic
                }}
                className="button"
                style={{
                  borderRadius: "8px",
                  fontSize: "16px",
                  marginLeft: "30px",
                  padding: "4px 16px",
                  fontWeight: 500,
                }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
