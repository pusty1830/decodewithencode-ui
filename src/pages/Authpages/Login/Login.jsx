import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { useFormik } from "formik";

import CustomTextField from "../../../components/utils/CustomTextField";
import { loginSchema } from "../../../components/utils/Schema";
import { signin } from "../../../services/services";
import { toast } from "react-toastify";
import { setCurrentAccessToken } from "../../../services/axiosClient";

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

export default function LoginPage() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      // console.log("Form values:", values);
      // // Add your login logic here
      const payLoad = {
        email: values.email,
        password: values.password,
      };
      signin(payLoad)
        .then((res) => {
          toast(res?.data?.msg);
          if (res?.data?.data?.accessToken) {
            setCurrentAccessToken(res?.data?.data?.accessToken);
          }
          navigate("/");
        })
        .catch((err) => {
          toast(err);
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
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <CustomTextField
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
              autoFocus
            />
            <CustomTextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              margin="normal"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
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
          </Box>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2">
              Don&apos;t have an account?{" "}
              <Link
                to="/register"
                style={{ color: theme.palette.primary.main }}
              >
                Register here
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
