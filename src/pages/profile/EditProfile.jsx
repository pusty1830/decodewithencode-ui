import React, { useState, useEffect } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DropzoneArea from "../../components/dropzone";
import { getProfile, updateProfile } from "../../services/services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const StyledTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    color: "#3cacae",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function EditProfile() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [files, setFiles] = useState([]);
  const [profilePic, setProfilePic] = useState([]);

  let profilepicture;
  let coverImage;
  if (profilePic.length > 0) {
    profilepicture = profilePic[0]?.url;
  }

  if (files.length > 0) {
    coverImage = files[0]?.url;
  }

  console.log(coverImage);
  console.log(profilepicture);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getProfile()
      .then((res) => {
        console.log(res);
        setUsername(res?.data?.data?.userName);
        setEmail(res?.data?.data?.email);
        setPhoneNumber(res?.data?.data?.phoneNumber);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const payLoad = {
    userName: username,
    email: email,
    phoneNumber: phoneNumber,
    coverImage: coverImage,
    profileImage: profilepicture,
  };
  const handleUpdate = () => {
    updateProfile(payLoad)
      .then((res) => {
        toast(res?.data?.msg);
        navigate("/profile");
      })
      .catch((err) => {
        toast(err);
      });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper", marginBottom: 6 }}>
      <Box>
        <Container>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="back"
            sx={{ my: 1 }}
          >
            <ArrowBackIcon />
            <Typography variant="h6" sx={{ ml: 1 }}>
              Back
            </Typography>
          </IconButton>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Typography
          variant="h4"
          align="center"
          sx={{ my: 4, color: "#3cacae", fontWeight: "bold" }}
        >
          Edit Profile
        </Typography>

        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            "& .MuiTabs-indicator": {
              backgroundColor: "#3cacae", // Custom underline color
            },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant={isMobile ? "scrollable" : "fullWidth"}
            scrollButtons={isMobile ? "auto" : false}
            aria-label="edit profile tabs"
          >
            <StyledTab label="Details" />
            <StyledTab label="Profile Pictures" />
            {/* <StyledTab label="Reset Password" /> */}
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#3cacae", // Border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#3cacae", // Hover color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3cacae", // Focus color
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fffff", // Label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#3cacae", // Focused label color
                  },
                  "& .MuiInputBase-input": {
                    color: "#3cacae", // Input text color
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#3cacae",
                    },
                    "&:hover fieldset": {
                      borderColor: "#3cacae",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3cacae",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fffff",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#3cacae",
                  },
                  "& .MuiInputBase-input": {
                    color: "#3cacae",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#3cacae",
                    },
                    "&:hover fieldset": {
                      borderColor: "#fffff",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#3cacae",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fffff",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#3cacae",
                  },
                  "& .MuiInputBase-input": {
                    color: "#3cacae",
                  },
                }}
              />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{ mb: 1, color: "#3cacae", marginTop: 3 }}
                >
                  Upload Cover Photo
                </Typography>

                <DropzoneArea
                  sx={{ color: "#3cacae" }}
                  label={"Drop your coverImage here"}
                  accept={"image/*"}
                  onFilesChange={setFiles}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{ mb: 1, color: "#3cacae", marginTop: 3 }}
                >
                  Upload Profile Photo
                </Typography>

                <DropzoneArea
                  sx={{ color: "#3cacae" }}
                  label={"Drop your profileImage here"}
                  accept={"image/*"}
                  onFilesChange={setProfilePic}
                />
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{ bgcolor: "#3cacae", "&:hover": { bgcolor: "#2b9799" } }}
            onClick={handleUpdate}
          >
            Save Changes
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
