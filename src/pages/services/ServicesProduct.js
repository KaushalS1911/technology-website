import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import first from "../../assets/images/Services/Group 392.webp";
import first1 from "../../assets/images/Services/Group 393.webp";
import first2 from "../../assets/images/Services/Union.webp";
import first3 from "../../assets/images/Services/Vector 10.webp";
import first4 from "../../assets/images/Services/Vector 11.webp";
import { useTheme } from "@emotion/react";

const ServicesProduct = () => {
  const theme = useTheme();

  const data = [
    {
      image: first,
      heading: "Expertise",
      description:
        "Our team of seasoned professionals brings a wealth of experience and expertise to every project.",
    },
    {
      image: first1,
      heading: "Innovation",
      description:
        "We stay at the forefront of technology trends, ensuring our solutions are innovative and future-ready.",
    },
    {
      image: first2,
      heading: "Client-Centric Approach",
      description:
        "Your success is our priority. We work closely with clients to understand their goals and deliver solutions that exceed expectations.",
    },
    {
      image: first3,
      heading: "Agility",
      description:
        "In a rapidly evolving digital landscape, we embrace agility to adapt quickly and effectively to changing requirements.",
    },
    {
      image: first4,
      heading: "Forward-Thinking Service",
      description:
        "Our commitment to innovation means we're always one step ahead, ready to meet your evolving needs with cutting-edge solutions.",
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
                  padding: { xl: "35px 25px", xs: "25px 20px" },
                  borderRadius: "15px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  width: "100%",
                  height: "100%",
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
                    fontSize: { xl: "26px" },
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
                  {val.description}
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
