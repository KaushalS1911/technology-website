import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Grid,
  InputLabel,
  Select,
  FormControl,
  Box,
  CircularProgress,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  location: "",
  experience: "",
  technology: "",
  current_sal: "",
  expected_sal: "",
  availability: "",
  resume_file: null,
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contact: Yup.string().required("Mobile Number is required"),
});

const experienceOptions = [
  { value: "Fresher", label: "Fresher" },
  { value: "Experienced", label: "Experienced" },
];

const technologyOptions = [
  { value: "Reactjs Developer", label: "Reactjs Developer" },
  { value: "Nodejs Developer", label: "Nodejs Developer" },
  { value: "Flutter Developer", label: "Flutter Developer" },
];

const whenwemeet = [
  { value: "Immediate", label: "Immediate" },
  { value: "1Week", label: "1Week" },
  { value: "15Days", label: "15Days" },
  { value: "1Month", label: "1Month" },
];

const ApplyjobForm = () => {
  const [Loading, setLoading] = useState(false);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("resume-file", values.resume_file);
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("email", values.email);
    formData.append("contact", values.contact);
    formData.append("location", values.location);
    formData.append("experience", values.experience);
    formData.append("technology", values.technology);
    formData.append("current_sal", values.current_sal);
    formData.append("expected_sal", values.expected_sal);
    formData.append("availability", values.meetingTime);

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
      }
      resetForm();
    } catch (error) {
      toast.success(error.data.message);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />

      <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
        <Grid sx={{ fontSize: "25px" }} row container py={2}>
          <Box
            sx={{ Height: "4px", width: "3px", background: "#24b8fc" }}
            mr={1}
          ></Box>
          <Box sx={{ color: "#35b8fc", fontWeight: "600" }} mr={1}>
            APPLY
          </Box>
          <Box sx={{ color: "#262626", fontWeight: "600" }}>FOR THIS JOB </Box>
        </Grid>
        <FormControl
          sx={{
            m: 1,
            p: 0,
            minWidth: 120,
            width: "100%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#35b8fc",
              },
              "&:hover fieldset": {
                borderColor: "#35b8fc",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#35b8fc",
                borderWidth: "1px",
              },
            },
            size: "small",
          }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, isSubmitting, setFieldValue }) => (
              <Form>
                <Grid container spacing={2} py={1}>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextField
                      name="firstName"
                      id="firstName"
                      fullwidth
                      size="small"
                      sx={{ width: "100%" }}
                      label="First Name"
                      value={values.firstName}
                      onChange={(e) =>
                        setFieldValue("firstName", e.target.value)
                      }
                      error={touched.firstName && !!errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                      InputLabelProps={{
                        style: { color: "#35b8fc" },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextField
                      name="lastName"
                      id="lastName"
                      label="Last Name"
                      sx={{ width: "100%" }}
                      fullwidth
                      size="small"
                      value={values.lastName}
                      onChange={(e) =>
                        setFieldValue("lastName", e.target.value)
                      }
                      error={touched.lastName && !!errors.lastName}
                      helperText={touched.lastName && errors.lastName}
                      InputLabelProps={{
                        style: { color: "#35b8fc" },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextField
                      name="email"
                      id="email"
                      label="Email Address"
                      fullwidth
                      sx={{ width: "100%" }}
                      size="small"
                      value={values.email}
                      onChange={(e) => setFieldValue("email", e.target.value)}
                      error={touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      InputLabelProps={{
                        style: { color: "#35b8fc" },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <PhoneInput
                      country={"us"}
                      sx={{ border: "1px solid #35b8fc" }}
                      value={values.contact}
                      onChange={(value) => setFieldValue("contact", value)}
                      inputStyle={{ width: "100%" }}
                    />
                    {touched.contact && errors.contact && (
                      <div
                        style={{
                          color: "#d32f2f",
                          fontSize: "14px",
                          marginTop: "6px",
                        }}
                      >
                        {errors.contact}
                      </div>
                    )}
                  </Grid>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextField
                      name="location"
                      id="location"
                      label="Current Location"
                      fullwidth
                      sx={{ width: "100%" }}
                      size="small"
                      value={values.location}
                      onChange={(e) =>
                        setFieldValue("location", e.target.value)
                      }
                      InputLabelProps={{
                        style: { color: "#35b8fc" },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel
                        id="Technology"
                        style={{ color: "#35b8fc", marginTop: "-7px" }}
                      >
                        Technology
                      </InputLabel>
                      <Select
                        id="technology"
                        label="Technology"
                        labelId="Technology"
                        name="technology"
                        fullwidth
                        sx={{ width: "100%" }}
                        size="small"
                        value={values.technology}
                        onChange={(e) =>
                          setFieldValue("technology", e.target.value)
                        }
                        InputLabelProps={{
                          style: { color: "#35b8fc" },
                        }}
                      >
                        {technologyOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel
                        id="experiance"
                        style={{ color: "#35b8fc", marginTop: "-7px" }}
                      >
                        Experience
                      </InputLabel>
                      <Select
                        label="Experience"
                        labelId="experiance-label"
                        id="experience"
                        name="experience"
                        fullwidth
                        sx={{ width: "100%" }}
                        size="small"
                        value={values.experience}
                        onChange={(e) =>
                          setFieldValue("experience", e.target.value)
                        }
                        InputLabelProps={{
                          style: { color: "#35b8fc" },
                        }}
                      >
                        {experienceOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextField
                      name="current_sal"
                      label="Current Salary"
                      id="Current Salary"
                      fullwidth
                      sx={{ width: "100%" }}
                      size="small"
                      value={values.current_sal}
                      onChange={(e) =>
                        setFieldValue("current_sal", e.target.value)
                      }
                      InputLabelProps={{
                        style: { color: "#35b8fc" },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <TextField
                      name="expected_sal"
                      label="Expected Salary"
                      id="Expected Salary"
                      fullwidth
                      size="small"
                      sx={{ width: "100%" }}
                      value={values.expected_sal}
                      onChange={(e) =>
                        setFieldValue("expected_sal", e.target.value)
                      }
                      InputLabelProps={{
                        style: { color: "#35b8fc" },
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel
                        id="meetingTime"
                        style={{ color: "#35b8fc", marginTop: "-7px" }}
                      >
                        If selected, when we meet?
                      </InputLabel>
                      <Select
                        label=" If selected, when we meet?"
                        labelId="meetingTime"
                        id="availability"
                        name="availability"
                        fullwidth
                        sx={{ width: "100%" }}
                        size="small"
                        value={values.availability}
                        onChange={(e) =>
                          setFieldValue("availability", e.target.value)
                        }
                        InputLabelProps={{
                          style: { color: "#35b8fc" },
                        }}
                      >
                        {whenwemeet.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container spacing={2} py={1}>
                  <Grid item lg={4} md={6} sm={12} xs={12}>
                    <Grid container alignItems={"center"}>
                      <Grid pr={3}>
                        <Grid item lg={4} md={6} sm={12} xs={12}>
                          <div class="nodeJs_resume__mnTyb">
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              class="nodeJs_customImageInput__f58b9"
                              onChange={(event) => {
                                const file = event.currentTarget.files[0];
                                setFieldValue("resume_file", file);
                              }}
                            />
                          </div>
                        </Grid>
                      </Grid>
                      <Grid pr={3}>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          sx={{
                            backgroundColor: "#35b8fc",
                            color: "#fff",
                            "&:hover": {
                              color: "#0086FF",
                            },
                          }}
                        >
                          {Loading ? (
                            <CircularProgress size={24} color="inherit" />
                          ) : (
                            "APPLY JOB"
                          )}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </FormControl>
      </Box>
    </>
  );
};

export default ApplyjobForm;
