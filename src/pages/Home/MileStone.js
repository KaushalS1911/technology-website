import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import keyboardImg from "../../assets/images/home-image/keyboard.webp";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { TitleAnimation } from "../Contact Us/TitleAnimation ";

const MileStone = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <Box
        align="center"
        paddingY={3}
        sx={{
          color: "#fff",
          background: `linear-gradient(rgba(0, 51, 97, 0.6), rgba(0, 0, 0, 0.9)), url(${keyboardImg}) no-repeat fixed`,
          backgroundSize: "cover",
          p: {xs:"35px",sm:"70px"},
        }}
      >
        <TitleAnimation title="Milestones Achieved So Far" />
        <Typography vaiant="body1" paddingY={2}>
          Smiles delivered by our team all over the world
        </Typography>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <Grid container spacing={3}>
            <Grid item xs={6} lg={3} md={6}>
              <Typography sx={{ fontSize: {xs:"35px",sm:"50px"},textAlign: "center" }}>

                {counterOn && (
                  <CountUp start={0} end={50} duration={2} delay={0} />
                )}
                +
              </Typography>
              <Typography variant="subtitle">Happy Clients</Typography>
            </Grid>
            <Grid item xs={6} lg={3} md={6}>
              <Typography sx={{ fontSize: {xs:"35px",sm:"50px"},textAlign: "center" }}>
                {counterOn && (
                  <CountUp start={0} end={80} duration={2} delay={0} />
                )}
                +
              </Typography>
              <Typography variant="subtitle">Projects</Typography>
            </Grid>
            <Grid item xs={6} lg={3} md={6}>
              <Typography sx={{ fontSize: {xs:"35px",sm:"50px"},textAlign: "center" }}>
                {counterOn && (
                  <CountUp start={0} end={15} duration={2} delay={0} />
                )}
                +
              </Typography>
              <Typography variant="subtitle">In-house
                specialists</Typography>
            </Grid>
            <Grid item xs={6} lg={3} md={6}>
              <Typography sx={{ fontSize: {xs:"35px",sm:"50px"},textAlign: "center" }}>
                {counterOn && (
                  <CountUp
                    start={0}
                    end={4650}
                    duration={2}
                    delay={0}
                  />
                )}
                +
              </Typography>
              <Typography variant="subtitle">Hours Spent</Typography>
            </Grid>
          </Grid>
        </ScrollTrigger>
      </Box>
    </>
  );
};

export default MileStone;
