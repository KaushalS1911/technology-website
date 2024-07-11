import React from "react";
import { TitleAnimation } from "../../components/TitleAnimation";
import { Box, Breadcrumbs, Grid, Typography } from "@mui/material";
import { Link, Link as RouterLink, useParams } from "react-router-dom";
import { useTheme } from "@emotion/react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { portfolioItems } from "./Portfolio";
import back from "../../assets/images/home-image/back-img.png";

const SingleProject = () => {
  const { id } = useParams();
  const data = portfolioItems.find((value) => value.id == id);
  console.log(data);
  const responsive = {
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: false,
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
      <Box sx={{ width: "100%" }}>
        <div
          id="bannerSlider"
          className="position-relative"
          style={{
            padding: "150px 0px",
            marginTop: "40px",
            backgroundImage: `url(${back})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box textAlign="center" color={"white !important"}>
            <Box sx={{ fontSize: "35px", fontWeight: "600" }}>
              {data?.title}
            </Box>
            <Box display={"flex"} justifyContent={"center"} mt={2}>
              <Box
                sx={{
                  height: "3px",
                  width: "100px",
                  backgroundColor: "#B3DBFF",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    height: "13px",
                    width: "13px",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "50%",
                    left: "0%",
                    transform: "translateY(-50%)",
                    animation: "run 2s infinite linear alternate-reverse",
                  }}
                  bgcolor={theme.palette.primary.main}
                ></Typography>
              </Box>
            </Box>
            <Box
              sx={{ marginTop: "20px" }}
              display={"flex"}
              justifyContent={"center"}
            >
              <Breadcrumbs
                aria-label="breadcrumb"
                color={"white"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Link
                  component={RouterLink}
                  to="/portfolio"
                  color="white"
                  underline="none"
                >
                  <Box sx={{ color: "white" }}>Portfolio</Box>
                </Link>
                <Link
                  component={RouterLink}
                  to="/"
                  color="white"
                  underline="none"
                  sx={{ pointerEvents: "none", cursor: "default" }}
                >
                  <Box sx={{ color: "white" }}>{data?.title}</Box>
                </Link>
              </Breadcrumbs>
            </Box>
          </Box>
        </div>
        <Box my={5} px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
          <Box>
            <Box display={{ md: "flex" }} justifyContent={"space-between"}>
              <Box>
                <Box my={3}>
                  <Typography variant="h4">
                    {data?.title1 && data?.title1}
                  </Typography>
                </Box>
                <Box>
                  {data?.des1 &&
                    data?.des1?.map((e, index) => (
                      <>
                        <Box>
                          <Typography variant="h6" my={2}>
                            {e.title && `( ${index + 1} ) ${e.title}`}
                          </Typography>
                        </Box>
                        <Box>
                          {e?.details &&
                            e?.details.map((d) => (
                              <li style={{ listStyleType: "unset" }}>{d}</li>
                            ))}
                        </Box>
                      </>
                    ))}
                </Box>
              </Box>
              <Box
                width={{ md: "500px" }}
                height={{ md: "500px" }}
                mx={{ md: 5, xs: 2 }}
                my={{ md: 0, xs: 5 }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <img
                  src={data?.img}
                  alt={data?.img}
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>
            <Box>
              <Box my={3}>
                <Typography variant="h4">
                  {data?.title2 && data?.title2}
                </Typography>
              </Box>
              <Box>
                {data?.des2 &&
                  data?.des2?.map((e) => (
                    <>
                      <Box>
                        <li style={{ listStyleType: "unset" }}>{e}</li>
                      </Box>
                    </>
                  ))}
              </Box>
            </Box>
            <Box>
              <Box my={3}>
                <Typography variant="h4">
                  {data?.title3 && data?.title3}
                </Typography>
              </Box>
              <Box>
                {data?.des3 &&
                  data?.des3?.map((e) => (
                    <>
                      <Box>
                        <li style={{ listStyleType: "unset" }}>{e}</li>
                      </Box>
                    </>
                  ))}
              </Box>
            </Box>
            <Box>
              <Box my={3}>
                <Typography variant="h4">
                  {data?.title4 && data?.title4}
                </Typography>
              </Box>
              <Box>
                {data?.des4 &&
                  data?.des4?.map((e) => (
                    <>
                      <Box>
                        <li style={{ listStyleType: "unset" }}>{e}</li>
                      </Box>
                    </>
                  ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SingleProject;
