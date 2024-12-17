import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  MenuItem,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addCourseSchema } from "../../components/utils/Schema";
import { getUserId } from "../../services/axiosClient";
import { addCourse, uploadVideo } from "../../services/services";
import DropzoneArea from "../../components/dropzone";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3cacae",
    },
    background: {
      default: "#ffffff",
    },
  },
});

const categoryOptions = ["Programming", "Data Analyst", "AI and ML", "Other"];

export default function AddCoursePage() {
  const [files, setFiles] = useState([]);
  const [files1, setFiles1] = useState([]);
  const [course, setCourse] = useState([]);
  let preview_url1;
  let course_url;

  // Check if the arrays have elements before accessing
  if (files.length > 0) {
    preview_url1 = files[0]?.url; // Optional chaining to avoid errors
  }

  if (files1.length > 0) {
    course_url = files1[0]?.url;
  }

  // console.log("Preview URL:", preview_url1);
  // console.log("Course URL:", course_url);

  // console.log(preview_url1);
  // console.log(course_url);
  const initialValues = {
    title: "",
    description: "",
    category: "",
    // customCategory: "",
    // previewVideo: null,
    // video: null,
    price: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted: ", values);
    // add course logic
    const payLoad = {
      title: values.title,
      category: values.category,
      description: values.description,
      price: values.price,
      teacher_id: getUserId(),
    };

    addCourse(payLoad)
      .then((res) => {
        console.log(res.data); //here in response the id is send back !
        setCourse(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(course);

    const payload = {
      course_id: course.id,
      teacher_id: course.teacher_id,
      preview_url: preview_url1,
      video_url: course_url,
    };

    uploadVideo(payload)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    resetForm();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <Paper
          elevation={3}
          sx={{ mt: 8, mb: 3, p: 4, backgroundColor: "white" }}
        >
          <Typography component="h1" variant="h5" color="primary" gutterBottom>
            Add New Course
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={addCourseSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form noValidate>
                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Course Title"
                  name="title"
                  helperText={<ErrorMessage name="title" />}
                  error={Boolean(
                    values.title === "" && addCourseSchema.fields.title
                  )}
                />

                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  select
                  id="category"
                  label="Category"
                  name="category"
                >
                  {categoryOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Field>

                {/* {values.category === "Other" && (
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    id="customCategory"
                    label="Custom Category"
                    name="customCategory"
                    helperText={<ErrorMessage name="customCategory" />}
                  />
                )} */}

                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Course Description"
                  name="description"
                  multiline
                  rows={4}
                  helperText={<ErrorMessage name="description" />}
                />

                <Box sx={{ mt: 2 }}>
                  {/* <Typography variant="subtitle1" color="textSecondary">
                    Preview Course Video
                  </Typography>
                  <input
                    type="file"
                    name="previewVideo"
                    accept="video/*"
                    onChange={(e) =>
                      setFieldValue("previewVideo", e.currentTarget.files[0])
                    }
                  /> */}
                  <DropzoneArea
                    label={"Drop your preview video here"}
                    accept={"video/*"}
                    onFilesChange={setFiles}
                  />
                  {/* <ErrorMessage name="previewVideo" /> */}
                </Box>

                <Box sx={{ mt: 2 }}>
                  {/* <Typography variant="subtitle1" color="textSecondary">
                    Course Video
                  </Typography>
                  <input
                    type="file"
                    name="video"
                    accept="video/*"
                    onChange={(e) =>
                      setFieldValue("video", e.currentTarget.files[0])
                    }
                  /> */}
                  <DropzoneArea
                    label={"Drop your Course here"}
                    accept={"video/*"}
                    onFilesChange={setFiles1}
                  />
                  {/* <ErrorMessage name="video" /> */}
                </Box>

                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="price"
                  label="Course Price"
                  name="price"
                  type="number"
                  InputProps={{ inputProps: { min: 0, step: 500 } }}
                  helperText={<ErrorMessage name="price" />}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "primary.main",
                    color: "white",
                  }}
                >
                  Add Course
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
