import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import first from "../../assets/images/Services/Group 392.png";
import first1 from "../../assets/images/Services/Group 393.png";
import first2 from "../../assets/images/Services/Union.png";
import first3 from "../../assets/images/Services/Vector 10.png";
import first4 from "../../assets/images/Services/Vector 11.png";
import { Image } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const ServicesProduct = () => {
  const theme = useTheme();

  const data = [
    {
      image: first,
      heading: "Product scope",
      descripation:
        "A structured 15 day process to align your product vision with your business goals.",
    },
    {
      image: first1,
      heading: "Product scope",
      descripation:
        "A structured 15 day process to align your product vision with your business goals.",
    },
    {
      image: first2,
      heading: "Product scope",
      descripation:
        "A structured 15 day process to align your product vision with your business goals.",
    },
    {
      image: first3,
      heading: "Product scope",
      descripation:
        "A structured 15 day process to align your product vision with your business goals.",
    },
    {
      image: first4,
      heading: "Product scope",
      descripation:
        "A structured 15 day process to align your product vision with your business goals.",
    },
  ];
  return (
    <>
      <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
        <Grid
          container
          spacing={3}
          alignItems={"center"}
          justifyContent={"center"}
          marginY={4}
        >
          {data.map((val, ind) => (
            <Grid item md={4} key={ind} sm={6}>
              <Box
                bgcolor="white"
                sx={{
                  // padding: "25px 15px",
                  padding: { xl: "35px 25px", xs: "25px 20px" },
                  borderRadius: "15px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  transition: " 0.5s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100px",
                    width: "100px",
                  }}
                >
                  <Box sx={{ height: "79px", width: "72px", padding: "10px" }}>
                    <img src={val.image} alt={val.heading} />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "10px",
                    fontWeight: "700",
                    fontSize: { xl: "30px" },
                  }}
                >
                  {val.heading}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "8px",
                    color: `${theme.palette.gray}`,
                    fontSize: { xs: "13px", xl: "17px" },
                    letterSpacing: "0.5px",
                  }}
                >
                  {val.descripation}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default ServicesProduct;
