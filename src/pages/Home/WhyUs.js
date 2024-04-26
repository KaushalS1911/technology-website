import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import group from "../../assets/images/home-image/whoweare.gif";
import why1 from "../../assets/images//home-image/inovative-technology.png";
import why3 from "../../assets/images/home-image/privacy-security.png";
import why4 from "../../assets/images/home-image/global-community.png";
import why5 from "../../assets/images/home-image/reaponsive-aupport.png";

const WhyUs = () => {
  return (
    <Box
      px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}
      py="60px"
    >
      <Box>
        <Typography
          variant="h3"
          sx={{ fontWeight: "600", fontSize: "35px", marginBottom: "30px" }}
        >
          Why Choose Us?
        </Typography>
      </Box>

      <Grid container spacing={2} width={"100%"}>
        <Grid item lg={4} md={12} sx={12}>
          <Grid container spacing={2}>
            <Grid item lg={12} md={6} sx={12}>
              <Grid
                item
                sx={{
                  cursor: "pointer",
                  transition: "all 0.5s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Paper component={Box} p={3} borderRadius="4">
                  <Box>
                    <img
                      src={why1}
                      alt="small logo"
                      style={{ width: "auto", height: "60px" }}
                    />
                  </Box>
                  <Typography variant="h6" fontWeight={600} my={1}>
                    Innovative Technology
                  </Typography>
                  <Typography variant="body2">
                    Our platform is built on the latest technological
                    advancements, ensuring fast, reliable, and scalable
                    interactions. With JBS Technology, you stay connected
                    smoothly and efficiently, regardless of your location.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid item lg={12} md={6} sx={12}>
              <Grid
                item
                sx={{
                  cursor: "pointer",
                  transition: "all 0.5s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Paper component={Box} p={4} borderRadius="3">
                  <Box>
                    <img
                      src={why3}
                      alt="small logo"
                      style={{ width: "auto", height: "60px" }}
                    />
                  </Box>
                  <Typography variant="h6" fontWeight={600}>
                    Privacy and Security
                  </Typography>
                  <Typography variant="body2">
                    We use advanced security measures to protect your data and
                    ensure your interactions remain private. With robust privacy
                    settings, you control your information, allowing you to
                    communicate with confidence and peace of mind.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} md={6} sx={12}>
          <Grid
            item
            order={{ xs: 1, md: 2 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                height: "432px",
              }}
            >
              <img src={group} alt="group" style={{ objectFit: "contain" }} />
            </Box>
          </Grid>
        </Grid>
        <Grid item lg={4} md={6} sx={12}>
          <Grid container spacing={2}>
            <Grid item md={12} sx={12}>
              <Grid
                item
                sx={{
                  cursor: "pointer",
                  transition: "all 0.5s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Paper component={Box} p={4} borderRadius="3">
                  <Box>
                    <img
                      src={why4}
                      alt="small logo"
                      style={{ width: "auto", height: "60px" }}
                    />
                  </Box>
                  <Typography variant="h6" fontWeight={600}>
                    Global Community
                  </Typography>
                  <Typography variant="body2">
                    Connect with a diverse and vibrant community from across the
                    globe. Our platform removes geographical and cultural
                    barriers, enriching your social media experience with a
                    variety of perspectives and interactions.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Grid item md={12} sx={12}>
              <Grid
                item
                sx={{
                  cursor: "pointer",
                  transition: "all 0.5s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Paper component={Box} p={4} borderRadius="3">
                  <Box>
                    <img
                      src={why5}
                      alt="small logo"
                      style={{ width: "auto", height: "60px" }}
                    />
                  </Box>
                  <Typography variant="h6" fontWeight={600}>
                    Responsive Support
                  </Typography>
                  <Typography variant="body2">
                    Our customer service team is always available to provide
                    timely and effective assistance. Whether you have a
                    technical question or need help with your account, we are
                    here to ensure your experience is hassle-free.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyUs;
