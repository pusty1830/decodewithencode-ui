import React from "react";
import { Box, Typography, Avatar, Button, LinearProgress, Grid, TextField, Paper } from "@mui/material";
import { styled } from "@mui/material/styles"; // Use 'styled' from MUI v5




// Custom styles using MUI's `styled`
const ProfileContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: "linear-gradient(to right,rgba(255, 255, 255, 0.46))",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  maxWidth: "1200px",
  margin: "auto",
}));

const ProfileHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
  alignItems: "center",
  marginBottom: theme.spacing(4),
}));

const ProfileImage = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  borderRadius: "50%",
  objectFit: "cover",
  boxShadow: theme.shadows[5],
  border: `4px solid #3cacae`,
  marginBottom: theme.spacing(2),
}));

const ProfileDetails = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

const ProgressContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Progress = styled(LinearProgress)(({ theme }) => ({
  height: 9,
  borderRadius: 4,
  
}));

const ActionButton = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const IconSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  marginTop: theme.spacing(4),
}));

const IconItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const IconCircle = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  boxShadow: theme.shadows[2],
  fontSize: "24px",
}));

const ContactDetails = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  marginTop: theme.spacing(4),
}));

const TextFieldStyle = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ProfileDetailsComponent = () => {
  return (
    <ProfileContainer>
      {/* Profile Header */}
      <ProfileHeader>
        {/* Profile Picture */}
        <ProfileImage
          alt="John Doe"
          src="" // Replace with your image URL
        />

        {/* Profile Details */}
        <ProfileDetails>
          <Typography variant="h4" fontWeight="bold" color="textPrimary">
            Mr. Jyoti Dash
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            A curious learner and aspiring software developer, passionate about building scalable and accessible learning platforms.
          </Typography>

          {/* Progress Section */}
          <ProgressContainer>
            <Typography variant="body2" color="textSecondary">
              Learning Progress
            </Typography>
            <Progress variant="determinate"
        value={80}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: '#e0e0e0', // Light gray track
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#3cacae', // Custom color for the progress bar
          },
        }} />
            <Typography variant="body2" color="textSecondary" align="right" style={{ marginTop: 4 }}>
              80% Completed
            </Typography>
          </ProgressContainer>

          {/* Action Buttons */}
          <ActionButton>
            <Button variant="contained" sx={{background:'#3cacae'}} size="large" style={{ marginRight: 8 }}>
              View Courses
            </Button>
            <Button variant="outlined" sx={{color:'#3cacae',borderColor:'#3cacae'}} size="large">
              Edit Profile
            </Button>
          </ActionButton>
        </ProfileDetails>
      </ProfileHeader>

      {/* Icon Section */}
      <IconSection>
        <IconItem>
          <IconCircle sx={{background:'#3cacae'}}>📚</IconCircle>
          <Typography variant="body2" sx={{color:'#3cacae',borderColor:'#3cacae'}} style={{ marginTop: 8 }}>
            Courses
          </Typography>
        </IconItem>
        <IconItem>
          <IconCircle sx={{background:'#3cacae'}}>🏆</IconCircle>
          <Typography variant="body2" sx={{color:'#3cacae',borderColor:'#3cacae'}} style={{ marginTop: 8 }} >
            Achievements
          </Typography>
        </IconItem>
        <IconItem>
          <IconCircle sx={{background:'#3cacae'}}>🔧</IconCircle>
          <Typography variant="body2" sx={{color:'#3cacae',borderColor:'#3cacae'}} style={{ marginTop: 8 }}>
            Skills
          </Typography>
        </IconItem>
      </IconSection>

      {/* Contact and Account Details Section */}
      <ContactDetails sx={{background: "linear-gradient(to right, #3cacae, #ffffff)",borderColor:'#3cacae'}}>
        <Typography variant="h5" fontWeight="bold" >
          Contact & Account Details
        </Typography>
        <Grid container spacing={2} style={{ marginTop: 16 ,borderColor:'white'}}>
          <Grid item xs={12} md={6}>
            <TextFieldStyle
              label="Phone Number"
              variant="outlined"
              fullWidth
              placeholder="+123 456 7890"
              sx={{borer:'2px solid red'}}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextFieldStyle
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              placeholder="example@email.com"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextFieldStyle
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              placeholder="••••••••"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextFieldStyle
              label="Bank Account"
              variant="outlined"
              fullWidth
              placeholder="1234 5678 9012 3456"
            />
          </Grid>
        </Grid>
        {/* Save Button */}
        <Box display="flex" justifyContent="flex-end" style={{ marginTop: 16 }}>
          <Button variant="contained" sx={{background:'#3cacae'}} size="large">
            Save Changes
          </Button>
        </Box>
      </ContactDetails>
    </ProfileContainer>
  );
};

export default ProfileDetailsComponent;
