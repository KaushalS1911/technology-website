import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import heroimage from "../../assets/images/about/Group 380.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ServicesCounter } from "./ServicesCounter";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

function Herosection() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Box
      bgcolor={theme.palette.backgroundLiteGrey}
      sx={{ padding: "64px 0 48px" }}
    >
      <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <Typography
                variant={isSmallScreen ? "h4" : "h2"}
                color={theme.palette.primary.main}
                gutterBottom
              >
                Our Team <br /> Is Your Team
              </Typography>
              <Typography variant="body1" paragraph>
                Experience, Rigor, and a User-Centric Approach.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: "center"}}>
            <img src={heroimage} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Herosection;
