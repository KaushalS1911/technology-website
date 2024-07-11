import React from 'react';
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import CountUp from "react-countup";
import jbslogo from "../../assets/images/herosection/jbslogo.png";

function Counter(props) {
    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const achievements = [
        { title: "Clients Worldwide", end: 200 },
        { title: "Approved Courses", end: 20 },
        { title: "Job Placements", end: 50 },
        { title: "Certified Trainers", end: 10 },
        { title: "Certification Approval", end: 5 },
    ];

    return (
        <>
            <Box className="counter">
                <Container maxWidth={"xl"} sx={{ position: "relative" }}>
                    <Box sx={{ mt: "130px" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box>
                                <Typography sx={{ color: "textGray" }}>Facts & Figures</Typography>
                                <Typography component={"h3"}
                                            sx={{ fontWeight: "600", fontSize: { xs: "30px", sm: "35px" }, mt: "10px" }}>JBS Achievements</Typography>
                            </Box>
                            <Box>
                                <Typography className="jbsAnimateLogo"
                                            sx={{
                                                transform: "scale(0.6)",
                                                position: "absolute",
                                                right: 0,
                                                top: "-5%",
                                                display: { sm: "block", xs: "none" }
                                            }}>
                                    <img src={jbslogo} alt="jbs logo" />
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ mt: "60px" }}>
                            <Grid container spacing={5}>
                                {achievements.map((item, index) => (
                                    <Grid item xs={6} sm={4} key={index} className={`achievement-${index}`}>
                                        <Box sx={{ height: "100%", borderTop: "2px solid darkBlue" }}>
                                            <Typography sx={{
                                                fontSize: { xs: "20px", sm: "22px", md: "24px" },
                                                fontWeight: "500", mt: "25px"
                                            }}>{item.title}</Typography>
                                            <Typography sx={{
                                                fontSize: { xs: "45px", sm: "50px", md: "60px" },
                                                fontWeight: "700",
                                                my: { xs: "14px", sm: "20px" }
                                            }}>
                                                <CountUp start={0} end={item.end} duration={2} delay={0} /> +
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Counter;
