import React from "react";
import { TextField } from "@mui/material";

export default function CustomTextField({
  id,
  label,
  name,
  type,
  autoComplete,
  required = true,
  fullWidth = true,
  margin = "normal",
  ...props
}) {
  return (
    <TextField
      id={id}
      label={label}
      name={name}
      type={type}
      autoComplete={autoComplete}
      required={required}
      fullWidth={fullWidth}
      margin={margin}
      {...props}
    />
  );
}
