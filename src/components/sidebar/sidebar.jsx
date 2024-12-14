import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonIcon from "@mui/icons-material/Person";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PaymentIcon from "@mui/icons-material/Payment";
import AddIcon from "@mui/icons-material/Add";
import CodeIcon from "@mui/icons-material/Code";
import EditIcon from "@mui/icons-material/Edit";
import color from "../utils/Colors";
import { isLoggedIn } from "../../services/axiosClient";
import { useEffect } from "react";
import { getProfile } from "../../services/services";

// Icon arrays for each role
const studentIcon = [
  {
    to: "/",
    icon: <HomeRoundedIcon style={{ width: "30px" }} />,
    title: "Home",
  },
  {
    to: "/resources",
    icon: <LibraryBooksIcon style={{ width: "30px" }} />,
    title: "Resources",
  },
  {
    to: "/courses",
    icon: <MenuBookIcon style={{ width: "30px" }} />,
    title: "Courses",
  },
  {
    to: "/my-courses",
    icon: <MenuBookIcon style={{ width: "30px" }} />,
    title: "My Courses",
  },
  {
    to: "/mentor",
    icon: <PersonIcon style={{ width: "30px" }} />,
    title: "Mentors",
  },
  {
    to: "/payments",
    icon: <PaymentIcon style={{ width: "30px" }} />,
    title: "Purchases",
  },
  {
    to: "/code-editor",
    icon: <CodeIcon style={{ width: "30px" }} />,
    title: "Code Editor",
  },
];
const studentIcon1 = [
  {
    to: "/",
    icon: <HomeRoundedIcon style={{ width: "30px" }} />,
    title: "Home",
  },
  {
    to: "/courses",
    icon: <MenuBookIcon style={{ width: "30px" }} />,
    title: "Courses",
  },
  {
    to: "/mentor",
    icon: <PersonIcon style={{ width: "30px" }} />,
    title: "Mentors",
  },
  {
    to: "/code-editor",
    icon: <CodeIcon style={{ width: "30px" }} />,
    title: "Code Editor",
  },
];

const teacherIcon = [
  {
    to: "/teacher-homepage",
    icon: <HomeRoundedIcon style={{ width: "30px" }} />,
    title: "Home",
  },
  {
    to: "/my-course",
    icon: <MenuBookIcon style={{ width: "30px" }} />,
    title: "My Courses",
  },
  {
    to: "/add-course",
    icon: <AddIcon style={{ width: "30px" }} />,
    title: "Add Course",
  },
  {
    to: "/update-courses",
    icon: <EditIcon style={{ width: "30px" }} />,
    title: "Edit Courses",
  },
  {
    to: "/enrolled-students",
    icon: <PersonIcon style={{ width: "30px" }} />,
    title: "Students",
  },
  {
    to: "/earnings-teacher",
    icon: <PaymentIcon style={{ width: "30px" }} />,
    title: "Earnings",
  },
];

const adminIcon = [
  {
    to: "/admin-dashboard",
    icon: <HomeRoundedIcon style={{ width: "30px" }} />,
    title: "Dashboard",
  },
  {
    to: "/teacher-management",
    icon: <PersonIcon style={{ width: "30px" }} />,
    title: "Teacher Management",
  },
  {
    to: "/course-management",
    icon: <LibraryBooksIcon style={{ width: "30px" }} />,
    title: "Course Management",
  },
  {
    to: "/student-management",
    icon: <MenuBookIcon style={{ width: "30px" }} />,
    title: "Student Management",
  },
  {
    to: "/payments",
    icon: <PaymentIcon style={{ width: "30px" }} />,
    title: "Payment Management",
  },
  {
    to: "/reports",
    icon: <CodeIcon style={{ width: "30px" }} />,
    title: "Reports and Analytics",
  },
  {
    to: "/settings",
    icon: <LibraryBooksIcon style={{ width: "30px" }} />,
    title: "Settings",
  },
];
const mentorIcon = [];

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    isLoggedIn() ? (
      getProfile()
        .then((res) => {
          console.log(res?.data?.data?.role);
          setRole(res?.data?.data?.role);
        })
        .catch((err) => {
          console.log(err);
        })
    ) : (
      <>You are not logged in</>
    );
  }, []);

  // Determine which icons to use based on the role
  const getIconsByRole = () => {
    switch (role) {
      case "User":
        return isLoggedIn() ? studentIcon : studentIcon1;
      case "Teacher":
        return teacherIcon;
      case "Mentor":
        return mentorIcon;
      case "Admin":
        return adminIcon;
      default:
        return studentIcon1;
    }
  };

  const icons = getIconsByRole();

  return (
    <>
      {!isMobile ? (
        <Drawer
          variant="permanent"
          sx={{
            zIndex: 2,
            width: 80,
            flexShrink: 0,
            overflow: "visible",
            transition: "width 0.3s ease",
            "& .MuiDrawer-paper": {
              width: isHovered ? 160 : 75,
              background: "transparent",
              boxSizing: "border-box",
              border: "none",
              overflow: "visible",
              transition: "width 0.3s ease",
            },
          }}
        >
          <div style={{ height: "57px" }}></div>
          <List
            sx={{
              boxShadow: isHovered
                ? "40px 0px 165px rgba(255, 255, 255,0.9), 10px -5px 15px rgba(0, 0, 0, 0.158) inset"
                : "0px 0px 15px rgba(0,0,0,0.1),10px -5px 15px rgba(0, 0, 0, 0.158) inset",
              padding: "5px",
              paddingRight: 0,
              paddingTop: 2,
              paddingBottom: 0,
              height: "fit-content",
              overflow: "hidden",
              margin: "20px 6px",
              borderRadius: "16px",
              background: color.sidebarButton,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {icons.map(({ to, icon, title }, index) => (
              <ListItem
                key={index}
                component={Link}
                to={to}
                sx={{
                  marginBottom: "20px",
                  fontWeight: 500,
                  paddingBottom: 1.2,
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  color:
                    location.pathname === to
                      ? color.sidebarText
                      : color.sidebarButtonText,
                  background:
                    location.pathname === to ? color.sidebarBg : "transparent",
                  borderRadius: "16px",
                  transition: "0.05s ease",
                  "&:hover": {
                    background: color.sidebarBg,
                    color: color.sidebarText,
                  },
                }}
              >
                {icon}
                {isHovered && (
                  <span style={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                    {title}
                  </span>
                )}
              </ListItem>
            ))}
          </List>
        </Drawer>
      ) : (
        <AppBar
          position="fixed"
          sx={{
            zIndex: 1300,
            top: "auto",
            bottom: 0,
            background: "white",
          }}
        >
          <Box
            sx={{
              overflowX: "auto",
              display: "flex",
              padding: "5px",
            }}
          >
            {icons.map(({ to, icon, title }) => (
              <Tooltip key={to} title={title} placement="top" arrow>
                <ListItem
                  component={Link}
                  to={to}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "10px",
                    color:
                      location.pathname === to
                        ? color.sidebarButtonText
                        : color.sidebarText,
                    background:
                      location.pathname === to ? color.sidebarButton : "none",
                  }}
                >
                  {icon}
                </ListItem>
              </Tooltip>
            ))}
          </Box>
        </AppBar>
      )}
    </>
  );
};

export default Sidebar;
