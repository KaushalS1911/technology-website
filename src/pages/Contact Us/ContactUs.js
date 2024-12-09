import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ContactImg from "../../assets/images/Contact/Contact-Us_image.webp";
import {Grid, TextField, Button, Box, CircularProgress, Typography} from "@mui/material";
import { useTheme } from "@emotion/react";
import axios from "axios";
import { TitleAnimation } from "./TitleAnimation ";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const theme = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    contact: Yup.string().required("Contact is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const Formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          "https://jbs-institut-backend.onrender.com/api/user-form",
          values
        );
        if (response.status === 200) {
          toast.success(response.data.message);
          resetForm();
        }
      } catch (error) {
        console.error("Error submitting form:", error.data.message);
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
        style={{ padding: "150px 0px", marginTop: "40px" }}
      >
        <TitleAnimation title={`Contact Us`} />
      </div>
      <Box bgcolor={theme.palette.backgroundLiteGrey}>
        <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
          <Grid container py={5} spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              // display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <div className="contact-image">
                <Typography variant="h4" gutterBottom>
                  Get in Touch
                </Typography>
                <Typography variant="h6">Contact Information</Typography>
                <Typography>
                  <strong>Work Phone Number:</strong> +91 914 902 5545, +91 8980 544 320
                </Typography>
                <Typography>
                  <strong>HR Phone Number:</strong> +91 9624 008 889
                </Typography>
                <Typography>
                  <strong>Work Inquiries:</strong> management@rushkar.com
                </Typography>
                <Typography>
                  <strong>HR Inquiries:</strong> hrteam@rushkar.com
                </Typography>
                <Typography mt={2}>
                  <strong>Ahmedabad Development Center:</strong>
                  <br />
                  411 - Sarthik Square, SG Highway, Pakwan Crossroad, Near GNFC Tower, Bodakdev, Ahmedabad, Gujarat 380054
                </Typography>
                <Typography mt={2}>
                  <strong>Marketing Center:</strong>
                  <br />
                  B-512, Titanium City Center, Satellite, Ahmedabad, Gujarat 380015
                </Typography>
                <Typography mt={2}>
                  <strong>Registered Address:</strong>
                  <br />
                  C/704, Sarita Residency - 2, Nr. Matru Village, Opp. Umiya Residency, New Nikol, Ahmedabad-382350, India
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <form onSubmit={Formik.handleSubmit} onReset={Formik.handleReset}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="your-name"
                      name="firstName"
                      label="First name"
                      variant="outlined"
                      value={Formik.values.firstName}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      error={
                        Formik.touched.firstName &&
                        Boolean(Formik.errors.firstName)
                      }
                      helperText={
                        Formik.touched.firstName && Formik.errors.firstName
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="your-surname"
                      name="lastName"
                      label="Last name"
                      variant="outlined"
                      value={Formik.values.lastName}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      error={
                        Formik.touched.lastName &&
                        Boolean(Formik.errors.lastName)
                      }
                      helperText={
                        Formik.touched.lastName && Formik.errors.lastName
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      value={Formik.values.email}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      error={
                        Formik.touched.email && Boolean(Formik.errors.email)
                      }
                      helperText={Formik.touched.email && Formik.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="your-subject"
                      name="contact"
                      label="Phone number"
                      variant="outlined"
                      value={Formik.values.contact}
                      inputProps={{ maxLength: 10 }}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      error={
                        Formik.touched.contact && Boolean(Formik.errors.contact)
                      }
                      helperText={
                        Formik.touched.contact && Formik.errors.contact
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="your-subject"
                      name="subject"
                      label="Subject"
                      variant="outlined"
                      value={Formik.values.subject}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      error={
                        Formik.touched.subject && Boolean(Formik.errors.subject)
                      }
                      helperText={
                        Formik.touched.subject && Formik.errors.subject
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="your-message"
                      name="message"
                      label="Message"
                      multiline
                      rows={5}
                      variant="outlined"
                      value={Formik.values.message}
                      onChange={Formik.handleChange}
                      onBlur={Formik.handleBlur}
                      error={
                        Formik.touched.message && Boolean(Formik.errors.message)
                      }
                      helperText={
                        Formik.touched.message && Formik.errors.message
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={!Formik.isValid}
                    >
                      {isSubmitting ? (
                        <CircularProgress size={24} />
                      ) : (
                        "Send Message"
                      )}
                    </Button>
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

export default ContactUs;
