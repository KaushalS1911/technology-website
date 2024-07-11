import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Box, Grid, Typography } from "@mui/material";
import company1 from "../../assets/images/home-image/companyLogo/company1.webp";
import company2 from "../../assets/images/home-image/companyLogo/company2.webp";
import company3 from "../../assets/images/home-image/companyLogo/downloadedLogo/strong.webp";
import company4 from "../../assets/images/home-image/companyLogo/company4.webp";
import company5 from "../../assets/images/home-image/companyLogo/company5.webp";
import company6 from "../../assets/images/home-image/companyLogo/downloadedLogo/astha2.webp";
import company7 from "../../assets/images/home-image/companyLogo/downloadedLogo/tenacious.webp";
import company10 from "../../assets/images/home-image/companyLogo/downloadedLogo/secretmindtech.webp";
import company11 from "../../assets/images/home-image/companyLogo/downloadedLogo/apc.webp";
import company12 from "../../assets/images/home-image/companyLogo/downloadedLogo/atologist.webp";
import company13 from "../../assets/images/home-image/companyLogo/downloadedLogo/weetech.webp";
import company14 from "../../assets/images/home-image/companyLogo/downloadedLogo/magnento.webp";
import company16 from "../../assets/images/home-image/companyLogo/downloadedLogo/strong.webp";
import company17 from "../../assets/images/home-image/companyLogo/downloadedLogo/weingenious.webp";
import company18 from "../../assets/images/home-image/companyLogo/downloadedLogo/logistrix.webp";
import bglayer2 from "../../assets/images/home-image/bglayer2.webp";

const Client = () => {
  const options = {
    loop: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    slideTransition: "linear",
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1400: {
        items: 6,
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
    company10,
    company11,
    company12,
    company13,
    company14,
    company16,
    company17,
    company18,
  ];

  return (
    <Box
      px={{ xs: "1rem", sm: "3rem", md: "2rem", xl: "2rem" }}
      py={{ xs:8, sm:10 , md: 15, xl:20}}
      sx={{
        background: `url(${bglayer2}) no-repeat 0% 80%`,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontWeight:700,
          mb:5,
          color: "#000",
          fontFamily: "'Poppins', sans-serif",
          fontSize: {
            xs: "18px",
            sm: "20px",
            md: "28px",
            xl: "30px",
          },
        }}
      >
        You Are In A Good Company
      </Typography>

      <OwlCarousel className="owl-them" {...options}>
        {companyImgArray.map((image, index) => (
          <div className="item" key={index}>
            <Grid container justifyContent="center">
              <Grid sx={{ padding: 2 }} className="placement-company">
                <img
                  src={image}
                  alt={`company-${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Grid>
            </Grid>
          </div>
        ))}
      </OwlCarousel>
    </Box>
  );
};

export default Client;
