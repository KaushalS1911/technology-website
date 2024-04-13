import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import monilsir from "../../assets/images/about/TPPS0075 1.png";
import Harshadsir from "../../assets/images/about/Mask group.png";
import logo from "../../assets/images/about/Group 387.png";
import CEOBox from "./CEOBox";
import Dev1 from "../../../src/assets/images/about/dev1.jpg"
import Dev2 from "../../../src/assets/images/about/dev2.jpg"
import Dev3 from "../../../src/assets/images/about/dev3.jpg"
import Dev4 from "../../../src/assets/images/about/dev4.jpg"
import Dev5 from "../../../src/assets/images/about/dev5.jpg"
import Dev7 from "../../../src/assets/images/about/dev7.jpg"

const itemData = [
  {
    img: monilsir,
    name: "Monil Kakadiya",
    position: "Co-Founter & CEO",
  },
  {
    img: Harshadsir,
    name: "Harshad Kakdiya",
    position: "Co-Founter & CEO",
  },
];
const staff = [
  {
    img: Dev1,
    name: "Kaushal Sojitra",
    position: "Full Stack Developer",
  },
  {
    img: Dev2,
    name: "Abhishek Vaghsiya",
    position: "Frontend Developer",
  },
  {
    img: Dev5,
    name: "Harshil Savaliya",
    position: "Full Stack Developer",
  },
  {
    img: Dev3,
    name: "Manav Gabani",
    position: "Flutter Developer",
  },
];
const staff_2 = [
  {
    img: Dev4,
    name: "Yash Kakadiya",
    position: "UI / UX Designer",
  },
  {
    img: Dev7,
    name: "Dixita Ghelani",
    position: "UI / UX Designer",
  },
];

function Ceo() {
  const theme = useTheme();
  return (
    <>
      <div style={{ margin: "40px 0px" }}>
        <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
          <Grid container xl={12}>
            <Grid item lg={8}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "600",
                  fontSize: "53px",
                  lineHeight: "82.5px",
                }}
              >
                Meet the Founders
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "19.5px" }}
                my={2}
                color={theme.palette.gray}
              >
                Our founding team started their journeys in the corporate world.
                They then moved on to build their own startups before coming
                together to form JBS Technology. They studied lean product development
                through building startups from the ground up with very few
                resources. This is why when you build a product with us it will
                always be streamlined to the most important features for your
                user.
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="start" spacing={3} py={3}>
            {itemData.map((item, index) => (
              <Grid item lg={3} sm={4} xs={12} key={index}>
                <CEOBox
                  
                  image={item.img}
                  name={item.name}
                  position={item.position}
                />
              </Grid>
            ))}
          </Grid>
          <Grid container xl={12}>
            <Grid item lg={8}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "600",
                  fontSize: "53px",
                  lineHeight: "82.5px",
                }}
              >
                Meet the Team
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "19.5px" }}
                my={2}
                color={theme.palette.gray}
              >
                We have a rigorous screening process to identify the best
                talent, from inception, UX / UI design, and development. We are
                always on the lookout for great problem solvers with passion and
                drive, these are the types of people we want to work with and
                learn from ourselves.
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{ display: "flex", alignItems: "center", margin: "10px 0px" }}
          >
            <img
              src={logo}
              alt="icone"
              style={{ width: "49px", height: "49" }}
            />
            <Typography
              variant="h6"
              sx={{
                margin: "0px 15px",
                fontWeight: "600",
                fontSize: "24px",
                lineHeight: "32px",
              }}
            >
              Development
            </Typography>
          </Box>
          <Grid container justifyContent="start" spacing={3} py={3}>
            {staff.map((item, index) => (
              <Grid item lg={3} sm={6} xs={12} key={index}>
                <CEOBox
                  image={item.img}
                  name={item.name}
                  position={item.position}
                />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{ display: "flex", alignItems: "center", margin: "10px 0px" }}
          >
            <img
              src={logo}
              alt="icone"
              style={{ width: "49px", height: "49" }}
            />
            <Typography
              variant="h6"
              sx={{
                margin: "0px 15px",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "32px",
              }}
            >
              UI / UX Designer
            </Typography>
          </Box>
          <Grid container justifyContent="start" spacing={3} py={3}>
            {staff_2.map((item, index) => (
              <Grid item lg={3} sm={4} xs={12} key={index}>
                <CEOBox
                  image={item.img}
                  name={item.name}
                  position={item.position}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Ceo;
