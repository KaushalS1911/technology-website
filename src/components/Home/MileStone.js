import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { TitleAnimation } from "../TitleAnimation";
import keyboardImg from "../../assets/images/home-image/keyboard.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

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
          py: "70px",
          // mt: "60px",
        }}
      >
        <TitleAnimation title="Milestones Achieved So Far" />
        <Typography vaiant="body1" paddingY={6}>
          Smiles delivered by our team all over the world
        </Typography>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Typography sx={{ fontSize: "40px" }}>
                {counterOn && (
                  <CountUp start={0} end={60} duration={2} delay={0}></CountUp>
                )}
                +
              </Typography>
              <Typography variant="body2">Happy Clients</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography sx={{ fontSize: "40px" }}>
                {counterOn && (
                  <CountUp start={0} end={180} duration={2} delay={0}></CountUp>
                )}
                +
              </Typography>
              <Typography variant="body2">Projects</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography sx={{ fontSize: "40px" }}>
                {counterOn && (
                  <CountUp start={0} end={20} duration={2} delay={0}></CountUp>
                )}
                +
              </Typography>
              <Typography variant="body2">Team</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography sx={{ fontSize: "40px" }}>
                {counterOn && (
                  <CountUp
                    start={0}
                    end={4650}
                    duration={2}
                    delay={0}
                  ></CountUp>
                )}
                +
              </Typography>
              <Typography variant="body2">Hours Spent</Typography>
            </Grid>
          </Grid>
        </ScrollTrigger>
      </Box>
    </>
  );
};

export default MileStone;
