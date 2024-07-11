import { Box, Container, Grid,  Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import footerBack from "../assets/images/Footer/Object.png";
import footerLogo from "../assets/images/Footer/footerlogo.png";
import ModeOfTravelOutlinedIcon from "@mui/icons-material/ModeOfTravelOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.footerBlue,
          mt: "40px",
        }}
      >
        <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
          <Grid
            container
            color={theme.palette.common.white}
            sx={{ padding: "10px" }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Link to={"/"}>
                <Box
                  sx={{
                    maxHeight: "270px",
                    maxWidth: "270px",
                    padding: "32px",
                  }}
                >
                  <img
                    src={footerLogo}
                    alt="logo"
                    style={{ objectFit: "contain",height: "100%",width: "100%" }}
                  />
                </Box>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2} sx={{ py: "25px" }}>
              <Typography
                sx={{
                  letterSpacing: "0.7px",
                  fontSize: "16px",
                  mb: "14px",
                  display: "block",
                }}
              >
                Company
              </Typography>
              <Box sx={{ my: 1.3 }}>
                <Link to="/">
                  <Box
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.footerGray,
                      fontSize: "12px",
                      letterSpacing: "0.8px",
                      my: "9px",
                    }}
                  >
                    Home
                  </Box>
                </Link>
                <Link to="/about">
                  <Box
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.footerGray,
                      fontSize: "13px",
                      letterSpacing: "0.8px",
                      my: "9px",
                    }}
                  >
                    About
                  </Box>
                </Link>
                <Link to="/portfolio">
                  <Box
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.footerGray,
                      fontSize: "13px",
                      letterSpacing: "0.8px",
                      my: "9px",
                    }}
                  >
                    Portfolio
                  </Box>
                </Link>
                <Link to="/services">
                  <Box
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.footerGray,
                      fontSize: "13px",
                      letterSpacing: "0.8px",
                      my: "9px",
                    }}
                  >
                    Services
                  </Box>
                </Link>
                <Link to={"/careers"}>
                  <Box
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.footerGray,
                      fontSize: "13px",
                      letterSpacing: "0.8px",
                      my: "9px",
                    }}
                  >
                    Careers
                  </Box>
                </Link>
                <Link to={"/contact "}>
                  <Box
                    sx={{
                      textDecoration: "none",
                      color: theme.palette.footerGray,
                      fontSize: "13px",
                      letterSpacing: "0.8px",
                      my: "9px",
                    }}
                  >
                    Contact Us
                  </Box>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ py: "25px" }}>
              <Box
                sx={{
                  letterSpacing: "0.7px",
                  fontSize: "16px",
                  mb: "14px",
                  display: "block",
                }}
              >
                Services
              </Box>
              <Box sx={{ my: 1.3 }}>
                <Box
                  sx={{
                    textDecoration: "none",
                    color: theme.palette.footerGray,
                    fontSize: "13px",
                    letterSpacing: "0.8px",
                    my: "9px",
                  }}
                >
                  Website Development
                </Box>
                <Box
                  sx={{
                    textDecoration: "none",
                    color: theme.palette.footerGray,
                    fontSize: "13px",
                    letterSpacing: "0.8px",
                    my: "9px",
                  }}
                >
                  Cloud App Development
                </Box>
                <Box
                  sx={{
                    textDecoration: "none",
                    color: theme.palette.footerGray,
                    fontSize: "13px",
                    letterSpacing: "0.8px",
                    my: "9px",
                  }}
                >
                  Website Hosting
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ py: "25px" }}>
              <Typography
                sx={{
                  letterSpacing: "0.7px",
                  fontSize: "16px",
                  mb: "14px",
                  display: "block",
                }}
              >
                Address
              </Typography>
              <Box sx={{ my: 1.3 }}>
                <Box
                  sx={{
                    textDecoration: "none",
                    color: theme.palette.footerGray,
                    fontSize: "13px",
                    letterSpacing: "0.8px",
                    my: "9px",
                    display: "flex",
                  }}
                >
                  <ModeOfTravelOutlinedIcon
                    sx={{ fontSize: "18px", marginRight: "5px" }}
                  />
                  <Box sx={{ fontSize: "13px" }}>
                    203, City Center, Yogi Chowk Surat - 395006 , Gujarati. IN
                  </Box>
                </Box>
                <Box
                  sx={{
                    textDecoration: "none",
                    color: theme.palette.footerGray,
                    fontSize: "13px",
                    letterSpacing: "0.8px",
                    my: "9px",
                    display: "flex",
                  }}
                >
                  <EmailOutlinedIcon
                    sx={{ fontSize: "18px", marginRight: "5px" }}
                  />
                  <Box sx={{ fontSize: "13px" }}>
                    jbs.technology26@gmail.com
                  </Box>
                </Box>
                <Box
                  sx={{
                    textDecoration: "none",
                    color: theme.palette.footerGray,
                    fontSize: "13px",
                    letterSpacing: "0.8px",
                    my: "9px",
                  }}
                >
                  <CallOutlinedIcon
                    sx={{ fontSize: "18px", marginRight: "5px" }}
                  />
                  Phone : 79844 43901
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: "5px" }}>
                  <Box>
                    <FacebookOutlinedIcon
                      sx={{
                        fontSize: "30px",
                        color: theme.palette.footerGray,
                        mx: "2px",
                      }}
                    />
                  </Box>
                  <Box>
                    <TwitterIcon
                      sx={{
                        fontSize: "30px",
                        color: theme.palette.footerGray,
                        mx: "2px",
                      }}
                    />
                  </Box>
                  <Box>
                    <InstagramIcon
                      sx={{
                        fontSize: "30px",
                        color: theme.palette.footerGray,
                        mx: "2px",
                      }}
                    />
                  </Box>
                  <Box>
                    <LinkedInIcon
                      sx={{
                        fontSize: "30px",
                        color: theme.palette.footerGray,
                        mx: "2px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
