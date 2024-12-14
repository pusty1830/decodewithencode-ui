"use client";

import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useFormik } from "formik";
import { verifySchema } from "../../../components/utils/Schema";
import { verifyEmail } from "../../../services/services";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

export default function VerifyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const formik = useFormik({
    initialValues: {
      verificationCode: "",
    },
    validationSchema: verifySchema,
    onSubmit: (values) => {
      //   console.log("Verification code submitted:", values.verificationCode);
      //   // Add your verification logic here
      const payLoad = {
        email: email,
        otp: values.verificationCode,
      };
      verifyEmail(payLoad)
        .then((res) => {
          //   console.log(res);
          toast(res?.data?.msg);
          navigate("/login");
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
            marginBottom: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
            <Typography
              component="h1"
              variant="h5"
              color="primary"
              gutterBottom
            >
              Verify Your Email
            </Typography>
            <Typography variant="body1" gutterBottom>
              Please enter the verification code sent to your email.
            </Typography>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="verificationCode"
                label="Verification Code"
                name="verificationCode"
                autoFocus
                value={formik.values.verificationCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.verificationCode &&
                  Boolean(formik.errors.verificationCode)
                }
                helperText={
                  formik.touched.verificationCode &&
                  formik.errors.verificationCode
                }
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Verify
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
