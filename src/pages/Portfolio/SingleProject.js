import React from "react";
import { TitleAnimation } from "../../components/TitleAnimation";
import { Box, Breadcrumbs, Grid, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import image from "../../assets/images/about/Group 380.png";
import { portfolioItems } from "./Portfolio";


const SingleProject = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    const data = portfolioItems.find((value) => value.id == id)
    console.log(data);
  const responsive = {
    loop: true,
    margin: 10,
      responsiveClass: true,
    dots:false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
      },
    },
  };

  const theme = useTheme();
  return (
    <>
      <Box
        sx={{ width: "100%" }}
        px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}
      >
        <Box sx={{ mt: "90px", mb: "40px" }}>
          <TitleAnimation title={data?.title} />
        </Box>
        <Box>
          <Breadcrumbs>
            <Link to={"/portfolio"}>
              <Typography
                underline="none"
                href=""
                sx={{ fontSize: { xs: "14px", xl: "17px" } }}
                color={theme.palette.gray}
              >
                Portfolio
              </Typography>
            </Link>
            <Link>
              <Typography
                underline="none"
                sx={{ fontSize: { xs: "14px", xl: "17px" } }}
                color={theme.palette.primary.main}
              >
                {data.title}
              </Typography>
            </Link>
          </Breadcrumbs>
        </Box>
        <Box>
          <Box sx={{ my: "15px" }}>
            <Typography variant="h5" sx={{ fontWeight: "500" }}>
              About Project
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: { xs: "14px", xl: "17px" } }}>
              {data?.description}
            </Typography>
          </Box>
          <Box sx={{ my: "15px" }}>
            <Typography variant="h5" sx={{ fontWeight: "500" }}>
              Technologies
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: { xs: "14px", xl: "17px" } }}>
              <li style={{ listStyle: "unset" }}>ReactJS</li>
              <li style={{ listStyle: "unset" }}>NextJS</li>
              <li style={{ listStyle: "unset" }}>MySQL</li>
              <li style={{ listStyle: "unset" }}>GraphQL</li>
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box sx={{ my: "15px" }}>
            <Typography variant="h5" sx={{ fontWeight: "500" }}>
              Screenshots
            </Typography>
          </Box>
          <Box>
            <Grid container bgcolor={theme.palette.backgroundLiteGrey}>
              <OwlCarousel className="owl-theme" {...responsive}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Box className="item">
                    <Box
                      sx={{
                        height: { sm: "400px", xs: "100%" },
                        width: { sm: "600px", xs: "100%" },
                      }}
                    >
                      <img
                        src={data.img}
                        style={{ objectFit: "contain" }}
                        alt="image1"
                      />
                    </Box>
                  </Box>
                </Grid>
              </OwlCarousel>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleProject;
