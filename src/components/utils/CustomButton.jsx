import React from "react";
import { Button } from "@mui/material";

export default function CustomButton({
  type = "button",
  fullWidth = true,
  variant = "contained",
  children,
  sx = {},
  ...props
}) {
  return (
    <Button
      type={type}
      fullWidth={fullWidth}
      variant={variant}
      sx={{ ...sx }}
      {...props}
    >
      {children}
    </Button>
  );
}
