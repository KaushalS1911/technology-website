import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import footerLogo from "../assets/images/Footer/footerlogo.webp";
import ModeOfTravelOutlinedIcon from "@mui/icons-material/ModeOfTravelOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {Link, NavLink} from "react-router-dom";
const Footer = () => {
  const theme = useTheme();
 const service = [
   {
     label: "Web Development",
     link: "/services/Web-Development",
   },
   {
     label: "Mobile App Development",
     link: "/services/Mobile-App-Development",
   },
   {
     label: "Graphic Design",
     link: "/services/Graphic-Design",
   },
   {
     label: "E-commerce Development",
     link: "/services/E-commerce-Development",
   },
   {
     label: "Website Hosting",
     link: "/services/Website-Hosting",
   },
   {
     label: "Website maintanance",
     link: "/services/Website-maintanance",
   },
   {
     label: "Website Cloning",
     link: "/services/Website-Cloning",
   },
   {
     label: "Logo and Brand Identity",
     link: "/services/Logo-and-Brand-Identity",
   },
   {
     label: "UI / UX design",
     link: "/services/UI-UX-design",
   },
 ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.footerBlue,
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
                <Link to="/" title="Home">
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
                <Link to="/about" title="about">
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
                <Link to="/portfolio" title="portfolio">
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
                <Link to="/services" title="services">
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
                <Link to={"/careers"} title="careers">
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
                <Link to={"/contact "} title="contact">
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
                  {service?.map((data ) =>(
                <NavLink to={data?.link}>
                    <Box
                        sx={{
                            textDecoration: "none",
                            color: theme.palette.footerGray,
                            fontSize: "13px",
                            letterSpacing: "0.8px",
                            my: "9px",
                        }}
                    >
                        {data?.label}
                    </Box>
                </NavLink>

                  ))}

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
                      203, City Center, Savlia Cir, Sanman Society, Mansarovar Society, Yoginagar Society, Surat, Gujarat 395006
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
                    <Link
                      to="mailto:jbs.technology26@gmail.com"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      jbs.technology26@gmail.com
                    </Link>
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
                  <CallOutlinedIcon
                    sx={{ fontSize: "18px", marginRight: "5px" }}
                  />
                  <Box sx={{ fontSize: "13px" }}>
                    <Link
                      to="tel:+91 79844 43901"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      Phone:+91 79844 43901
                    </Link>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mt: "5px" }}>
                  <Box>
                    <Link
                      to="https://www.facebook.com/profile.php?id=61555676966897"
                      target="_blank"
                    >
                      <FacebookOutlinedIcon
                        sx={{
                          fontSize: "30px",
                          color: theme.palette.footerGray,
                          mx: "2px",
                        }}
                      />
                    </Link>
                  </Box>
                  <Box>
                    <Link
                      to="https://twitter.com/JBSTechnology26"
                      target="_blank"
                    >
                      <TwitterIcon
                        sx={{
                          fontSize: "30px",
                          color: theme.palette.footerGray,
                          mx: "2px",
                        }}
                      />
                    </Link>
                  </Box>
                  <Box>
                    <Link
                      to="https://www.instagram.com/jbs_technology/?hl=en"
                      target="_blank"
                    >
                      <InstagramIcon
                        sx={{
                          fontSize: "30px",
                          color: theme.palette.footerGray,
                          mx: "2px",
                        }}
                      />
                    </Link>
                  </Box>
                  <Box>
                    <Link
                      to="https://www.linkedin.com/company/jbs-coder-infotech/"
                      target="_blank"
                    >
                      <LinkedInIcon
                        sx={{
                          fontSize: "30px",
                          color: theme.palette.footerGray,
                          mx: "2px",
                        }}
                      />
                    </Link>
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
