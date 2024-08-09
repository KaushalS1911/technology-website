import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";
import theme from "../../components/theme";

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
              <Typography
                variant="body1"
                sx={{ color: "#6c757d", wordBreak: "break-word" }}
              >
                <Link
                  to="mailto:jbs.technology26@gmail.com"
                  style={{ color: "#6c757d" }}
                >
                  jbs.technology26@gmail.com
                </Link>
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
                203, City Center, Savlia Cir, Sanman Society, Mansarovar
                Society, Yoginagar Society, Surat, Gujarat 395006
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
              <Typography variant="body1">
                <Link to="tel:+91 79844 43901" style={{ color: "#6c757d" }}>
                  +91 79844 43901
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.485662310964!2d72.88694027587596!3d21.212581681438326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6c653d90c978a55f%3A0x5b466180ab933d3d!2sJBS%20Technology!5e0!3m2!1sen!2sin!4v1720676131672!5m2!1sen!2sin"
          width="100%"
          height="425"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="map"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/*<iframe*/}
        {/*    src=""*/}
        {/*    width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"*/}
        {/*    referrerPolicy="no-referrer-when-downgrade"></iframe>*/}
      </Box>
    </>
  );
}

export default Location;
