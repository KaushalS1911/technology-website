import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import company1 from "../../assets/images/home-image/company1.svg";
import company2 from "../../assets/images/home-image/company2.svg";
import company3 from "../../assets/images/home-image/company3.png";
import company4 from "../../assets/images/home-image/company4.png";
import company5 from "../../assets/images/home-image/company5.png";
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
    company1,
    company2,
    company3,
    company4,
    company5,
    company1,
    company2,
    company3,
    company4,
    company5,
    company1,
    company2,
    company3,
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
