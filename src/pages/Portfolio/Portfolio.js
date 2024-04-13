import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import nectarImg from "../../assets/images/portfolio/nectar-2 (1) 1.png";
import nectarlogo from "../../assets/images/portfolio/Group 1 1.png";
import nectarlogo2 from "../../assets/images/portfolio/Group 1 1 (1).png";

import project1 from "../../assets/images/portfolio/project1 (1).png"
import stocklogo from "../../assets/images/portfolio/sytock logo.png"
import project2 from "../../assets/images/portfolio/stock.jpg";
import project3 from "../../assets/images/portfolio/project1 (4).png";
import jbs from "../../assets/images/portfolio/jbs.jpg";
import paperlogo from "../../assets/images/portfolio/paperlogo.png";
import nectar from "../../assets/images/portfolio/nectar.jpg";
import { useNavigate } from "react-router-dom";



const portfolioItems = [
  {
    id: 1,
    img: nectarImg,
    logo: nectarlogo,
    title: "Nectar",
    description:
      "Fave is a fandom-centric community with highly engaging content where fans can create deeper and lasting connections. The vision to nurture and grow the community is centered on rewarding positive and meaningful engagement with points that can be redeemed for discounts and exclusive experiences.",
    buttonVariant: "outlined",
    buttonColor: "#fff",
    buttonBorder: "white",
    buttonBackground: "#fff",
    backgroundColor: "rgba(91,212,129,1)",
    sectionTextColor: "white",
    images: [{nectarImg},{nectar}],
  },
  {
    id: 2,
    img: project2,
    logo: paperlogo,
    title: "Paper Generation",
    description:
      "Fave is a fandom-centric community with highly engaging content where fans can create deeper and lasting connections. The vision to nurture and grow the community is centered on rewarding positive and meaningful engagement with points that can be redeemed for discounts and exclusive experiences.",
    buttonVariant: "outlined",
    buttonColor: "rgba(91,212,129,1)",
    buttonBorder: "rgba(91,212,129,1)",
    buttonBackground: "rgba(91,212,129,1)",
    backgroundColor: "#fff",
    sectionTextColor: "#3E3E3E",
  },
  {
    id: 3,
    img: project1,
    logo: stocklogo,
    title: "Hedger Community",
    description:
      "Fave is a fandom-centric community with highly engaging content where fans can create deeper and lasting connections. The vision to nurture and grow the community is centered on rewarding positive and meaningful engagement with points that can be redeemed for discounts and exclusive experiences.",
    buttonVariant: "outlined",
    buttonColor: "#fff",
    buttonBorder: "white",
    buttonBackground: "#fff",
    backgroundColor: "#141C25",
    sectionTextColor: "white",
  },
  {
    id: 4,
    img: project3,
    logo: jbs,
    title: "Institute Website",
    description:
      "Fave is a fandom-centric community with highly engaging content where fans can create deeper and lasting connections. The vision to nurture and grow the community is centered on rewarding positive and meaningful engagement with points that can be redeemed for discounts and exclusive experiences.",
    buttonVariant: "outlined",
    buttonColor: "#141C25",
    buttonBorder: "#141C25",
    buttonBackground: "#141C25",
    backgroundColor: "#fff",
    sectionTextColor: "#3E3E3E",
  },
];
const Portfolio = () => {
  const theme = useTheme();
  const navigate = useNavigate()
  return (
    <>
      <Box bgcolor={theme.palette.backgroundLiteGrey} sx={{ mt: "40px" }}>
        <Box
          sx={{ width: "100%" }}
          px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}
        >
          <Grid>
            <Grid item lg={9} xs={11} sx={{ py: { xs: 8, md: 13 } }}>
              <Box
                className="heading"
                sx={{ fontSize: { md: "48px", xs: "32px" } }}
              >
                <Typography variant="div" fontWeight="bold">
                  We take digital experiance to the <br />
                  <Typography variant="span" color={theme.palette.primary.main}>
                    next level
                  </Typography>
                </Typography>
              </Box>
              <Box className="service_paragraph" sx={{ my: "15px" }}>
                <Typography>
                  The products we build are changing the way indusrty leaders do
                  thier core business
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {portfolioItems?.map((item, index) => (
        <Box
          key={item.id}
          bgcolor={item.backgroundColor}
          color={item.sectionTextColor}
        >
          <Container maxWidth="lg">
            <Box sx={{ py: "35px" }}>
              <Grid container alignItems="center" spacing={5}>
                {index % 2 === 0 && (
                  <Grid
                    item
                    sx={{ order: { md: 0 } }}
                    xs={12}
                    md={6}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Box
                      sx={{
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: { sm: "65%", md: "100%" },
                      }}
                    >
                      <img src={item.img} alt={item.title} />
                    </Box>
                  </Grid>
                )}
                <Grid item xs={12} md={6} sx={{ order: { md: 0, xs: 1 } }}>
                  <Box sx={{ width: { md: "270px", xs: "200px" } }}>
                    <img src={item.logo} alt="logo" />
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { md: "42px", xs: "32px" },
                      fontWeight: "600",
                      marginTop: "15px",
                      letterSpacing: "1.2px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: "20px",
                      fontWeight: "600",
                      lineHeight: "1.5",
                      letterSpacing: "0.9px",
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Button
                    variant={item.buttonVariant}
                    sx={{
                      mt: 3,
                      borderRadius: "30px",
                      fontWeight: "600",
                      mt: "30px",
                      padding: "16px 58px",
                      borderColor: item.buttonBorder,
                      color: item.buttonColor,
                      backgroundColor: item.backgroundColor,
                      "&:hover": {
                        backgroundColor: item.buttonBackground,
                        borderColor: item.buttonBorder,
                        color: item.backgroundColor,
                      },
                    }}
                    onClick={() =>
                      navigate(`/portfolio/single-project/${item.id}`)
                    }
                  >
                    View more
                  </Button>
                </Grid>
                {index % 2 !== 0 && (
                  <Grid
                    item
                    sx={{ order: { md: 0 } }}
                    xs={12}
                    md={6}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <Box
                      sx={{
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: { sm: "65%", md: "100%" },
                      }}
                    >
                      <img src={item.img} alt={item.title} />
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Container>
        </Box>
      ))}
    </>
  );
};
export { portfolioItems };
export default Portfolio;
