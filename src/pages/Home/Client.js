import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import company1 from "../../assets/images/home-image/companyLogo/company1.svg";
import company2 from "../../assets/images/home-image/companyLogo/company2.svg";
import company3 from "../../assets/images/home-image/companyLogo/company3.png";
import company4 from "../../assets/images/home-image/companyLogo/company4.png";
import company5 from "../../assets/images/home-image/companyLogo/company5.png";
import company6 from "../../assets/images/home-image/companyLogo/downloadedLogo/astha2.png";
import company7 from "../../assets/images/home-image/companyLogo/downloadedLogo/tenacious.png";
import company8 from "../../assets/images/home-image/companyLogo/downloadedLogo/techstaunch.png";
import company9 from "../../assets/images/home-image/companyLogo/downloadedLogo/tecocraft.png";
import company10 from "../../assets/images/home-image/companyLogo/downloadedLogo/secretmindtech.png";
import company11 from "../../assets/images/home-image/companyLogo/downloadedLogo/apc.png";
import company12 from "../../assets/images/home-image/companyLogo/downloadedLogo/atologist.png";
import company13 from "../../assets/images/home-image/companyLogo/downloadedLogo/weetech.png";
import company14 from "../../assets/images/home-image/companyLogo/downloadedLogo/magnento.png";
import company15 from "../../assets/images/home-image/companyLogo/downloadedLogo/zluck.png";
import company16 from "../../assets/images/home-image/companyLogo/downloadedLogo/strong.png";
import company17 from "../../assets/images/home-image/companyLogo/downloadedLogo/weingenious.png";
import company18 from "../../assets/images/home-image/companyLogo/downloadedLogo/logistrix.png";
import bglayer2 from "../../assets/images/home-image/bglayer2.png";

const Client = () => {
  const options = {
    loop: false,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplaytimeout: 3000,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
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
    <>
      <Box
        mb={"-40px"}
        px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}
        sx={{ py: "60px", background: `url(${bglayer2}) no-repeat 0% 60%` }}
      >
        <Box py={5}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "600",
              fontSize: "35px",
              marginBottom: "60px",
              textAlign: "center",
            }}
          >
            You Are In A Good Company
          </Typography>
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
              <Grid container spacing={7}>
                {companyImgArray.map((image, index) => (
                  <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                    <img
                      src={image}
                      alt="company"
                      style={{ objectFit: "contain" }}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          </OwlCarousel>
        </Box>
      </Box>
    </>
  );
};

export default Client;
