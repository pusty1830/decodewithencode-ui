import React, { useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { getProfile, updateProfile } from "../../services/services";
import ProfileBankAccount from "./ProfileBankAccount";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

export default function ProfileDetails() {
  const [user, setUser] = useState([]);

  const [bankDetails, setBankDetails] = useState({
    accountHolderName: user?.accountHolderName, // Default values for demonstration
    accountNumber: user?.accountNumber,
    ifscCode: user?.ifscCode,
    bankName: user?.bankName,
  });

  // Callback to handle form submission from the child component
  const handleBankDetailsSubmit = (values) => {
    // console.log("Form Submitted with Values:", values);
    const payLoad = {
      accountHolderName: values.accountHolderName,
      accountNumber: values.accountNumber,
      ifscCode: values.ifscCode,
      bankName: values.bankName,
    };
    updateProfile(payLoad)
      .then((res) => {
        toast(res?.data?.msg);
      })
      .catch((err) => {
        toast(err);
      });
    setBankDetails(values);
  };

  useEffect(() => {
    getProfile()
      .then((res) => {
        console.log(res?.data?.data?.coverImage);
        setUser(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(user);
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper", marginBottom: 8 }}>
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
          Decode With Encode
        </Typography>

        <Box
          sx={{
            position: "relative",
            height: 200,
            bgcolor: "grey.100",
            borderRadius: 2,
            mb: 10,
            backgroundImage: `url(${user.coverImage})`, // Set cover image as background
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Button
            variant="text"
            startIcon={<CloudUploadIcon />}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#3cacae",
            }}
          >
            Change Cover Photo
          </Button>
          <Avatar
            sx={{
              width: 120,
              height: 120,
              border: "4px solid #3cacae",
              position: "absolute",
              bottom: -60,
              left: "50%",
              transform: "translateX(-50%)",
            }}
            alt="Profile Picture"
            src={user.profileImage}
          />
        </Box>

        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h5"
            sx={{ color: "#3cacae", fontWeight: "bold" }}
          >
            {user.userName}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
            Role -{user.role}
          </Typography>
          <Button
            startIcon={<EditIcon />}
            onClick={() => navigate("/edit-profile")}
            sx={{ mt: 1, color: "#3cacae" }}
          >
            Edit your Profile
          </Button>
        </Box>

        <Card>
          <CardContent>
            <Tabs
              value={value}
              onChange={handleChange}
              variant={isMobile ? "scrollable" : "fullWidth"}
              scrollButtons={isMobile ? "auto" : false}
              aria-label="profile tabs"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#3cacae", // Active tab underline color
                },
              }}
            >
              <StyledTab label="Profile" />
              {user.role === "Teacher" && <StyledTab label="Bank Details" />}
            </Tabs>

            <TabPanel value={value} index={0}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Name :
                  </Typography>
                  <Typography variant="body1">{user.userName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Email Id :
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#3cacae" }}>
                    {user.email}
                  </Typography>
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  {/* <Typography variant="subtitle1" fontWeight="bold">
                    Password :
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#3cacae" }}>
                    abcd1234@
                  </Typography> */}
                {/* </Grid> */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Phone Number :
                  </Typography>
                  <Typography variant="body1">+91{user.phoneNumber}</Typography>
                </Grid>
              </Grid>
            </TabPanel>
            {user.role === "Teacher" && value === 1 && (
              <ProfileBankAccount
                onSubmit={handleBankDetailsSubmit}
                initialValues={bankDetails}
              />
            )}

            {/* </TabPanel> */}
          </CardContent>
        </Card>

        {/* <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{ bgcolor: "#3cacae", "&:hover": { bgcolor: "#2b9799" } }}
          >
            Save
          </Button>
        </Box> */}
      </Container>
    </Box>
  );
}
