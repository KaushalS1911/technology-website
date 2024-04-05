import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import heroImage from "../../assets/images/home-image/3c.png";
import { useTheme } from "@emotion/react";

const Hero = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}
        sx={{ mt: "104px" }}
      >
        <Grid
          container
          alignItems="center"
          sx={{
            alignItems: "center",
            height: "auto",
          }}
        >
          <Grid item md={6} order={{ xs: 2, md: 1 }}>
            <Box>
              <Typography
                variant="h3"
                sx={{ fontSize: "25px", fontWeight: "500", mb: 2 }}
              >
                Luxury in Every Line of Code
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "35px", lg: "45px" },
                  fontWeight: "600",
                  mb: 2,
                }}
              >
                Where Vision Meets <br /> Virtuality:
                <Typography
                  component="span"
                  sx={{
                    color: `${theme.palette.primary.main}`,
                    display: "inline",
                    fontSize: { xs: "35px", lg: "45px" },
                    fontWeight: "600",
                  }}
                >
                  {` Your IT Frontier`}
                </Typography>
              </Typography>
              <Typography variant="body2" fontSize={16} fontWeight="400" mb={2}>
                Crafting digital opulence, JBS TECHNOLOGY is the epitome of tech
                sophistication, delivering bespoke IT solutions that redefine
                luxury in every line of code. Take advantage of the pinnacle of
                innovation to elevate your company, where creativity and
                technology come together to achieve digital excellence.
              </Typography>
              <Stack
                sx={{ marginY: 2 }}
                component={Box}
                direction={{ xs: "column", sm: "row" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 4,
                    padding: 1,
                    width: { xs: "100%", sm: "200px" },
                  }}
                >
                  Contact Us
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: 4,
                    marginX: { xs: 0, sm: 2 },
                    marginY: { xs: 2, sm: 0 },
                    width: { xs: "100%", sm: "200px" },
                    padding: 1,
                  }}
                >
                  See Portfolio
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            pb={{ xs: 5, md: 0 }}
            order={{ xs: 1, md: 2 }}
            display="flex"
            justifyContent="center"
          >
            <Box sx={{ width: { sm: "65%", md: "100%" } }}>
              <img src={heroImage} alt="hero" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Hero;
