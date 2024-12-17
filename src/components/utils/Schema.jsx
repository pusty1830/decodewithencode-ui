import * as Yup from "yup";
const registerSchema = Yup.object({
  userName: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
    .required("Phone number is required"),
  role: Yup.string()
    .oneOf(["User", "Teacher", "Mentor"], "Invalid role selected")
    .required("Role is required"),
});
const verifySchema = Yup.object({
  verificationCode: Yup.string()
    .matches(/^[0-9]{6}$/, "Verification code must be exactly 6 digits")
    .required("Verification code is required"),
});

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const addCourseSchema = Yup.object({
  title: Yup.string().required("Course title is required"),
  description: Yup.string().required("Course description is required"),
  category: Yup.string().required("Category is required"),
  price: Yup.number()
    .required("Price is required")
    .min(0, "Price cannot be negative"),
  // previewVideo: Yup.mixed().required("Preview video is required"),
  // video: Yup.mixed().required("Course video is required"),
  customCategory: Yup.string().when("category", {
    is: "Other",
    then: Yup.string().required("Custom category is required"),
  }),
});

const accountDetailsSchema = Yup.object({
  accountHolderName: Yup.string()
    .trim()
    .required("Account Holder Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed"),
  accountNumber: Yup.string()
    .required("Account Number is required")
    .matches(/^\d{9,18}$/, "Account Number must be 9-18 digits"),
  ifscCode: Yup.string()
    .required("IFSC Code is required")
    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Enter a valid IFSC Code"),
  bankName: Yup.string()
    .trim()
    .required("Bank Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed"),
});

export {
  registerSchema,
  verifySchema,
  loginSchema,
  addCourseSchema,
  accountDetailsSchema,
};
