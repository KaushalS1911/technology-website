import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CEO1 from "../../assets/images/about/TPPS0075 1.webp";
import Harshadsir from "../../assets/images/about/Mask group.webp";
import logo from "../../assets/images/about/Group 387.webp";
import CEOBox from "./CEOBox";
import Dev1 from "../../../src/assets/images/about/dev1.webp";
import Dev2 from "../../../src/assets/images/about/dev2.webp";
import Dev3 from "../../../src/assets/images/about/dev3.webp";
import Dev4 from "../../../src/assets/images/about/dev4.webp";
import Dev7 from "../../../src/assets/images/about/dev7.webp";

const itemData = [
  {
    img: CEO1,
    name: "Monil Kakadiya",
    position: "Co-Founder & CEO",
  },
  {
    img: Harshadsir,
    name: "Harshad Kakadiya",
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
          <Grid container direction={'row'} justifyContent={'center'}>
            <Grid item lg={8} >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "600",
                  fontSize: "45px",
                  textAlign:"center",
                  lineHeight: "82.5px",
                }}
              >
                Meet the Founders
              </Typography>
              <Typography
                sx={{ fontSize: "16px" ,textAlign:'center'}}
                my={2}
                color={theme.palette.gray}
              >
                Our founding team started their journeys in the corporate world.
                They then moved on to build their own startups before coming
                together to form JBS Technology. They studied lean product
                development through building startups from the ground up with
                very few resources. This is why when you build a product with us
                it will always be streamlined to the most important features for
                your user.
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" spacing={3} py={3}>
            {itemData.map((item, index) => (
              <Grid item lg={3} sm={4} xs={12} key={index} justifyContent="center" spacing={3} py={3}>
                <CEOBox
                  image={item.img}
                  name={item.name}
                  position={item.position}
                />
              </Grid>
            ))}
          </Grid>
          {/* <Grid container xl={12} direction={'row'} justifyContent={'center'}>
            <Grid item lg={8}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "600",
                  textAlign:'center',
                  fontSize: "45px",
                  lineHeight: "82.5px",
                }}
              >
                Meet the Team
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "16px" ,textAlign:'center'}}
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
            sx={{ display: "flex", alignItems: "center", margin: "10px 0px" ,justifyContent:
            "center"}}
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
          <Grid container justifyContent="center" spacing={3} py={3}>
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
            sx={{ display: "flex", alignItems: "center", margin: "10px 0px",justifyContent:'center' }}
          >
            <img
              src={logo}
              alt="icone"
              style={{ width: "49px", height: "49px" }}
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
          <Grid container justifyContent="center" spacing={3} py={3}>
            {staff_2.map((item, index) => (
              <Grid item lg={3} sm={4} xs={12} key={index}>
                <CEOBox
                  image={item.img}
                  name={item.name}
                  position={item.position}
                />
              </Grid>
            ))}
          </Grid> */}
        </Box>
      </div>
    </>
  );
}

export default Ceo;
