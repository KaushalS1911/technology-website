import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import ContactImg from "../../assets/images/Contact/Contact-Us_image.png";
import { Grid, TextField, Button, Container, Box } from "@mui/material";
import { TitleAnimation } from "./TitleAnimation ";
import { useTheme } from "@emotion/react";

function ContactUs() {
  const theme = useTheme();
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
    onSubmit: async (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <>
      <div
        id="bannerSlider"
        className="position-relative"
        style={{ padding: "100px 0px", marginTop: "40px" }}
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
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <div className="contact-image">
                <img
                  src={ContactImg}
                  alt="contact-image"
                  className="img-fluid"
                />
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
                      Send Message
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
