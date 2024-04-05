import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

function Location() {
  return (
    <>
      <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
        <Grid container spacing={3} justifyContent="center" my={8}>
          <Grid item xs={12} md={6} lg={4} xl={4}>
            <Box className="contact-info-box bg-light p-4">
              <Box className="contact-icon" sx={{ marginX: "auto" }}>
                <MailIcon fontSize="30px" />
              </Box>
              <Typography
                sx={{ my: "3px", fontWeight: "600", fontSize: "21px" }}
              >
                Mail Here
              </Typography>
              <Typography variant="body1" sx={{ color: "#6c757d" }}>
                jbs.technology26@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={4}>
            <Box className="contact-info-box bg-light p-4">
              <Box className="contact-icon" sx={{ marginX: "auto" }}>
                <LocationOnIcon fontSize="30px" />
              </Box>
              <Typography
                sx={{ my: "3px", fontWeight: "600", fontSize: "21px" }}
              >
                Visit Here
              </Typography>
              <Typography variant="body1" sx={{ color: "#6c757d" }}>
                F-38 , City Center, Yogi Chowk Surat - 395006 , Gujarati. IN
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={4}>
            <Box className="contact-info-box bg-light p-4">
              <Box className="contact-icon" sx={{ marginX: "auto" }}>
                <PhoneIcon fontSize="30px" />
              </Box>
              <Typography
                sx={{ my: "3px", fontWeight: "600", fontSize: "21px" }}
              >
                Call Here
              </Typography>
              <Typography variant="body1" sx={{ color: "#6c757d" }}>
                +91 79844 43901
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100%" }} mt={5} mb={"-47px"}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4152472441606!2d72.88572987520234!3d21.215376181343018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f155c0ad929%3A0x97b93382aed70c3a!2sJBS%20IT%20Institute!5e0!3m2!1sen!2sin!4v1710151880321!5m2!1sen!2sin"
          width={600}
          height={425}
          style={{ border: 0, width: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </>
  );
}

export default Location;
