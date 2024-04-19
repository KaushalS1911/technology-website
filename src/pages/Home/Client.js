import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Box, Grid, Typography } from "@mui/material";
import company1 from "../../assets/images/home-image/companyLogo/company1.webp";
import company2 from "../../assets/images/home-image/companyLogo/company2.webp";
import company3 from "../../assets/images/home-image/companyLogo/company3.webp";
import company4 from "../../assets/images/home-image/companyLogo/company4.webp";
import company5 from "../../assets/images/home-image/companyLogo/company5.webp";
import company6 from "../../assets/images/home-image/companyLogo/downloadedLogo/astha2.webp";
import company7 from "../../assets/images/home-image/companyLogo/downloadedLogo/tenacious.webp";
import company8 from "../../assets/images/home-image/companyLogo/downloadedLogo/techstaunch.webp";
import company9 from "../../assets/images/home-image/companyLogo/downloadedLogo/tecocraft.webp";
import company10 from "../../assets/images/home-image/companyLogo/downloadedLogo/secretmindtech.webp";
import company11 from "../../assets/images/home-image/companyLogo/downloadedLogo/apc.webp";
import company12 from "../../assets/images/home-image/companyLogo/downloadedLogo/atologist.webp";
import company13 from "../../assets/images/home-image/companyLogo/downloadedLogo/weetech.webp";
import company14 from "../../assets/images/home-image/companyLogo/downloadedLogo/magnento.webp";
import company15 from "../../assets/images/home-image/companyLogo/downloadedLogo/zluck.webp";
import company16 from "../../assets/images/home-image/companyLogo/downloadedLogo/strong.webp";
import company17 from "../../assets/images/home-image/companyLogo/downloadedLogo/weingenious.webp";
import company18 from "../../assets/images/home-image/companyLogo/downloadedLogo/logistrix.webp";
import bglayer2 from "../../assets/images/home-image/bglayer2.webp";

const Client = () => {
  const options = {
    loop: false,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000, 
    slideTransition: 'linear', 
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 8, 
      },
    },
  };

  const companyImgArray = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7,
    company8,
    company9,
    company10,
    company11,
    company12,
    company13,
    company14,
    company15,
    company16,
    company17,
    company18,
  ];

  return (
    <Box
      px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}
      py={20}
      sx={{
        background: `url(${bglayer2}) no-repeat 0% 80%`,
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 600, fontSize: 35, marginBottom: 8 }}>
        You Are In A Good Company
      </Typography>
      <OwlCarousel className="owl-theme" {...options}>
        {companyImgArray.map((image, index) => (
          <div className="item" key={index}>
            <Grid container justifyContent="center">
              <Grid item xs={6} sm={4} md={3} lg={12} sx={{ padding: 2 }} className="placement-company">
                <img src={image} alt={`company-${index}`}  />
              </Grid>
            </Grid>
          </div>
        ))}
      </OwlCarousel>
    </Box>
  );
};

export default Client;
