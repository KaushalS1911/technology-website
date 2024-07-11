import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Grid,
  TextField,
  Button,
  Box,
  CircularProgress,
  Typography,
  Breadcrumbs,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link, Link as RouterLink, useParams} from "react-router-dom";
import back from "../../assets/images/home-image/back-img.png";

function JobForm({ defaultTechnology = "Node.js" }) {
  const theme = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
const {id} = useParams()
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    contact: Yup.string().required("Contact number is required"),
    location: Yup.string().required("Current location is required"),
    technology: Yup.string().required("Technology is required"),
    experience: Yup.string().required("Experience is required"),
    current_sal: Yup.string().required("Current salary is required"),
    expected_sal: Yup.string().required("Expected salary is required"),
    availability: Yup.string().required("Availability is required"),
    resume_file: Yup.mixed().required("Resume file is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      location: "",
      technology: defaultTechnology,
      experience: "",
      current_sal: "",
      expected_sal: "",
      availability: "",
      resume_file: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }
      formData.append("technology",id)
      try {
        const response = await axios.post(
          "https://jbs-institut-backend.onrender.com/api/resume",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          toast.success(response.data.message);
          resetForm();
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Error submitting form");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <>
      <ToastContainer />
      <div
        id="bannerSlider"
        className="position-relative"
        style={{
          padding: "150px 0px",
          marginTop: "40px",
          backgroundImage: `url(${back})`,
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat"
        }}
      >
        <Box textAlign="center" color={"white"}>
          <Box sx={{ fontSize: "35px", fontWeight: "600" }}>
            APPLY FOR THIS JOB
          </Box>
          <Box display={"flex"} justifyContent={"center"} mt={2}>
            <Box
              sx={{
                height: "3px",
                width: "100px",
                backgroundColor: "#B3DBFF",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  height: "13px",
                  width: "13px",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "50%",
                  left: "0%",
                  transform: "translateY(-50%)",
                  animation: "run 2s infinite linear alternate-reverse",
                }}
                bgcolor={theme.palette.primary.main}
              ></Typography>
            </Box>
          </Box>

          <Box
            sx={{ marginTop: "20px" }}
            display={"flex"}
            justifyContent={"center"}
          >
            <Breadcrumbs aria-label="breadcrumb" color={"white"}>
              <Link
                  component={RouterLink}
                  to="/careers"
                  color="white"
                  underline="none"
              >
                <Box sx={{ color: "white" }}>Careers</Box>
              </Link>
              <Link
                  component={RouterLink}
                  to="#"
                  color="white"
                  underline="none"
                  sx={{ pointerEvents: "none", cursor: "default" }}
              >
                <Box sx={{ color: "white" }}>Job Form</Box>
              </Link>
            </Breadcrumbs>
            {/*<Breadcrumbs aria-label="breadcrumb" color={"white"}>*/}
            {/*  <Link*/}
            {/*    component={RouterLink}*/}
            {/*    to="/careers"*/}
            {/*    color="white"*/}
            {/*    underline="none"*/}
            {/*  >*/}
            {/*    <Box sx={{ color: "white" }}>Career</Box>*/}
            {/*  </Link>*/}
            {/*  <Typography sx={{ color: "white" }}>Job Form</Typography>*/}
            {/*</Breadcrumbs>*/}
          </Box>
        </Box>
      </div>
      <Box bgcolor={theme.palette.backgroundLiteGrey}>
        <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
          <Grid container py={5} spacing={2}>
            <Grid item xs={12}>
              <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      variant="outlined"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      variant="outlined"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                      }
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="contact"
                      name="contact"
                      label="Contact"
                      variant="outlined"
                      value={formik.values.contact}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.contact && Boolean(formik.errors.contact)
                      }
                      helperText={
                        formik.touched.contact && formik.errors.contact
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="location"
                      name="location"
                      label="Current Location"
                      variant="outlined"
                      value={formik.values.location}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.location &&
                        Boolean(formik.errors.location)
                      }
                      helperText={
                        formik.touched.location && formik.errors.location
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="experience"
                      name="experience"
                      label="Experience"
                      variant="outlined"
                      value={formik.values.experience}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.experience &&
                        Boolean(formik.errors.experience)
                      }
                      helperText={
                        formik.touched.experience && formik.errors.experience
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="current_sal"
                      name="current_sal"
                      label="Current Salary"
                      variant="outlined"
                      value={formik.values.current_sal}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.current_sal &&
                        Boolean(formik.errors.current_sal)
                      }
                      helperText={
                        formik.touched.current_sal && formik.errors.current_sal
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="expected_sal"
                      name="expected_sal"
                      label="Expected Salary"
                      variant="outlined"
                      value={formik.values.expected_sal}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.expected_sal &&
                        Boolean(formik.errors.expected_sal)
                      }
                      helperText={
                        formik.touched.expected_sal &&
                        formik.errors.expected_sal
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="availability"
                      name="availability"
                      label="Availability"
                      variant="outlined"
                      value={formik.values.availability}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.availability &&
                        Boolean(formik.errors.availability)
                      }
                      helperText={
                        formik.touched.availability &&
                        formik.errors.availability
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      type="file"
                      id="resume_file"
                      name="resume_file"
                      label="Resume File/CV"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        accept: ".pdf,.doc,.docx",
                      }}
                      onChange={(event) => {
                        formik.setFieldValue(
                          "resume_file",
                          event.currentTarget.files[0]
                        );
                      }}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.resume_file &&
                        Boolean(formik.errors.resume_file)
                      }
                      helperText={
                        formik.touched.resume_file && formik.errors.resume_file
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box display="flex" justifyContent="end" mt={2}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ padding: "8px 40px", fontSize: "18px" }}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <CircularProgress size={24} />
                        ) : (
                          "Apply Now"
                        )}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default JobForm;
