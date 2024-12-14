import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import CustomTextField from "../../../components/utils/CustomTextField";
import CustomButton from "../../../components/utils/CustomButton";
import { useFormik } from "formik";
import { registerSchema } from "../../../components/utils/Schema";
import { register } from "../../../services/services";
import { toast } from "react-toastify";

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

export default function RegisterPage() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      role: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      // console.log("Form Values:", values);
      const payLoad = {
        userName: values.userName,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
        role: values.role,
      };
      register(payLoad)
        .then((res) => {
          console.log(res);
          toast(res?.data?.msg);
          navigate("/verify-email", { state: { email: values.email } });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: "secondary.main",
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography component="h1" variant="h5" color="primary" gutterBottom>
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 1 }}
          >
            <CustomTextField
              id="userName"
              label="Username"
              name="userName"
              autoComplete="username"
              autoFocus
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
            />
            <CustomTextField
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <CustomTextField
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <CustomTextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />
            <CustomTextField
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              autoComplete="tel"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
            <FormControl
              fullWidth
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "4px",
                  "& fieldset": {
                    borderColor: "#ced4da", // Same border color as your TextField
                  },
                  "&:hover fieldset": {
                    borderColor: "#3cacae", // Change color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#3cacae", // Change color when focused
                  },
                },
              }}
              error={formik.touched.role && Boolean(formik.errors.role)}
            >
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                id="role"
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <MenuItem value="User">User</MenuItem>
                <MenuItem value="Teacher">Teacher</MenuItem>
                <MenuItem value="Mentor">Mentor</MenuItem>
              </Select>
              <Typography variant="caption" color="error">
                {formik.touched.role && formik.errors.role}
              </Typography>
            </FormControl>

            <CustomButton
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </CustomButton>
            <Divider sx={{ my: 2 }}>OR</Divider>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  sx={{ mt: isMobile ? 1 : 0 }}
                >
                  GitHub
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  sx={{ mt: isMobile ? 1 : 0 }}
                >
                  Google
                </Button>
              </Grid>
            </Grid>
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link to="/login" sx={{ color: "#3cacae", underline: "none" }}>
                  Login here
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
