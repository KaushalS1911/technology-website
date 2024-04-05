import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ServicesCounter } from "./ServicesCounter";
import { useTheme } from "@emotion/react";
function MoreAbout() {
  const theme = useTheme();
  return (
    <>
      <div className="MoreAboutSection" style={{ margin: "40px 0px" }}>
        <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
          <ServicesCounter />
          <Grid
            container
            sx={{
              my: "10px",
            }}
            spacing={2}
          >
            <Grid
              item
              md={4}
              sm={6}
              sx={{
                margin: "10px 0px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.backgroundLiteGrey,
                  p: "25px",
                  borderRadius: "15px",
                  height: "100%",
                  transition: " 0.5s",
                  cursor:"pointer",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Our History
                </Typography>
                <Typography
                  sx={{ margin: "8px 0px" }}
                  color={theme.palette.gray}
                >
                  We have been a creative and competitive web developing company
                  since 2019 and been delivering great results and projects
                  while matching the asked deadlines of the project. Started
                  with the team of 2 to 10+ we're growing continuously.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              sx={{
                margin: "10px 0px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.backgroundLiteGrey,
                  p: "25px",
                  borderRadius: "15px",
                  height: "100%",
                  transition: " 0.5s",
                  cursor:"pointer",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Our Mission
                </Typography>
                <Typography
                  sx={{ margin: "8px 0px" }}
                  color={theme.palette.gray}
                >
                  Our mission is to provide and create the projects as per ones
                  vision with the utmost code quality forged with Passion and
                  Hard work.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              sx={{
                margin: "10px 0px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.backgroundLiteGrey,
                  p: "25px",
                  borderRadius: "15px",
                  height: "100%",
                  transition: " 0.5s",
                  cursor:"pointer",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "600" }}>
                  Who We Are
                </Typography>
                <Typography
                  sx={{ margin: "8px 0px" }}
                  color={theme.palette.gray}
                >
                  An entrepreneur firm with clear vision and passion for the a
                  greater success for the company and the clients.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
export default MoreAbout;
