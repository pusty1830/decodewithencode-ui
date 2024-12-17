import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import { accountDetailsSchema } from "../utils/Schema";

export default function ProfileBankAccount({ onSubmit, initialValues }) {
  const formik = useFormik({
    initialValues: initialValues, // Use the passed initialValues to populate the form
    validationSchema: accountDetailsSchema, // Ensure your validation schema is applied
    onSubmit: (values) => {
      console.log("Submitted Values:", values);
      onSubmit(values); // Call parent callback with the updated form values
    },
  });

  return (
    <Box
      component="form"
      sx={{ mt: 2 }}
      onSubmit={formik.handleSubmit}
      noValidate
    >
      <Grid container spacing={3}>
        {/* Account Holder Name Input */}
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            Account Holder Name:
          </Typography>
          <input
            type="text"
            name="accountHolderName"
            value={formik.values.accountHolderName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter account holder name"
            style={{
              width: "100%",
              padding: "8px",
              border:
                formik.touched.accountHolderName &&
                formik.errors.accountHolderName
                  ? "1px solid red"
                  : "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {formik.touched.accountHolderName &&
            formik.errors.accountHolderName && (
              <Typography color="error" variant="body2">
                {formik.errors.accountHolderName}
              </Typography>
            )}
        </Grid>

        {/* Bank Account Number Input */}
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            Account Number:
          </Typography>
          <input
            type="text"
            name="accountNumber"
            value={formik.values.accountNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your bank account number"
            style={{
              width: "100%",
              padding: "8px",
              border:
                formik.touched.accountNumber && formik.errors.accountNumber
                  ? "1px solid red"
                  : "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {formik.touched.accountNumber && formik.errors.accountNumber && (
            <Typography color="error" variant="body2">
              {formik.errors.accountNumber}
            </Typography>
          )}
        </Grid>

        {/* IFSC Code Input */}
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            IFSC Code:
          </Typography>
          <input
            type="text"
            name="ifscCode"
            value={formik.values.ifscCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter IFSC code"
            style={{
              width: "100%",
              padding: "8px",
              border:
                formik.touched.ifscCode && formik.errors.ifscCode
                  ? "1px solid red"
                  : "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {formik.touched.ifscCode && formik.errors.ifscCode && (
            <Typography color="error" variant="body2">
              {formik.errors.ifscCode}
            </Typography>
          )}
        </Grid>

        {/* Bank Name Input */}
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            Bank Name:
          </Typography>
          <input
            type="text"
            name="bankName"
            value={formik.values.bankName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter bank name"
            style={{
              width: "100%",
              padding: "8px",
              border:
                formik.touched.bankName && formik.errors.bankName
                  ? "1px solid red"
                  : "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {formik.touched.bankName && formik.errors.bankName && (
            <Typography color="error" variant="body2">
              {formik.errors.bankName}
            </Typography>
          )}
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "#3cacae",
            "&:hover": { bgcolor: "#2b9799" },
          }}
        >
          Update Bank Details
        </Button>
      </Box>
    </Box>
  );
}
