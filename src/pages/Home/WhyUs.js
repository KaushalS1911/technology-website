import { Box,  Grid, Paper, Typography } from "@mui/material";
import React from "react";
import group from "../../assets/images/home-image/4.webp";
import smallLogo from "../../assets/images/home-image/Group 370.webp";
import bglayer1 from "../../assets/images/home-image/bglayer1.webp";

const WhyUs = () => {
  return (
    <Box
      px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}
      sx={{ background: `url(${bglayer1}) no-repeat 0% 0%` }}
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
      <Grid container spacing={3}>
        <Grid item container spacing={3}>
          <Grid
            item
            container
            direction={{ xs: "row", md: "column" }}
            xs={12}
            md={4}
            spacing={3}
            order={{ xs: 2, md: 1 }}
          >
            <Grid
              item
              sm={6}
              md={4}
              sx={{
                cursor: "pointer",
                transition: "all 0.5s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Paper component={Box} p={4} borderRadius="3" height="100%">
                <Box>
                  <img
                    src={smallLogo}
                    alt="small logo"
                    style={{ width: "30px" }}
                  />
                </Box>
                <Typography variant="h6" fontWeight={600} my={1}>
                  Innovative Technology
                </Typography>
                <Typography variant="body2">
                  Our platform is built on the latest technological
                  advancements, ensuring fast, reliable, and scalable
                  interactions. With JBS Technology, you stay connected smoothly
                  and efficiently, regardless of your location.
                </Typography>
              </Paper>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              sx={{
                cursor: "pointer",
                transition: "all 0.5s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Paper component={Box} p={4} borderRadius="3" height="100%">
                <Box>
                  <img
                    src={smallLogo}
                    alt="small logo"
                    style={{ width: "30px" }}
                  />
                </Box>
                <Typography variant="h6" fontWeight={600}>
                  User-Centric Design
                </Typography>
                <Typography variant="body2">
                  We prioritize simplicity and functionality in our design,
                  making our social network intuitive and easy to navigate for
                  everyone. Your experience on our platform is seamless,
                  empowering you to focus on your connections and content.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
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
        <Grid item container spacing={3}>
          <Grid
            item
            sm={6}
            md={4}
            sx={{
              cursor: "pointer",
              transition: "all 0.5s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Paper component={Box} p={4} borderRadius="3" height="100%">
              <Box>
                <img
                  src={smallLogo}
                  alt="small logo"
                  style={{ width: "30px" }}
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
          <Grid
            item
            sm={6}
            md={4}
            sx={{
              cursor: "pointer",
              transition: "all 0.5s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Paper component={Box} p={4} borderRadius="3" height="100%">
              <Box>
                <img
                  src={smallLogo}
                  alt="small logo"
                  style={{ width: "30px" }}
                />
              </Box>
              <Typography variant="h6" fontWeight={600}>
                Global Community
              </Typography>
              <Typography variant="body2">
                Connect with a diverse and vibrant community from across the
                globe. Our platform removes geographical and cultural barriers,
                enriching your social media experience with a variety of
                perspectives and interactions.
              </Typography>
            </Paper>
          </Grid>
          <Grid
            item
            sm={6}
            md={4}
            sx={{
              cursor: "pointer",
              transition: "all 0.5s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Paper component={Box} p={4} borderRadius="3" height="100%">
              <Box>
                <img
                  src={smallLogo}
                  alt="small logo"
                  style={{ width: "30px" }}
                />
              </Box>
              <Typography variant="h6" fontWeight={600}>
                Responsive Support
              </Typography>
              <Typography variant="body2">
                Our customer service team is always available to provide timely
                and effective assistance. Whether you have a technical question
                or need help with your account, we are here to ensure your
                experience is hassle-free.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyUs;
