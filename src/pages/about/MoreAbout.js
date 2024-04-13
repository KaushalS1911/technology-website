import {Box, Grid, Typography} from "@mui/material";
import React from "react";
import {useTheme} from "@emotion/react";
import {Counter} from "../../components/global/Counter";

function MoreAbout() {
    const theme = useTheme();
    return (
        <>
            <Counter/>
            <Box px={{xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem"}}>
                <div className="MoreAboutSection" style={{margin: "40px 0px"}}>
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
                                    cursor: "pointer",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                    },
                                }}
                            >
                                <Typography variant="h6"
                                            sx={{fontWeight: "600"}}>
                                    Our History
                                </Typography>
                                <Typography
                                    sx={{margin: "8px 0px"}}
                                    color={theme.palette.gray}
                                >
                                    We pride ourselves on
                                    being a dynamic and forward-thinking
                                    technology solutions provider. Established
                                    in [Year], our journey has been marked by a
                                    relentless commitment to innovation and a
                                    passion for delivering exceptional results.
                                    As a team of dedicated professionals, we
                                    thrive on the challenge of transforming
                                    ideas into reality.
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
                                    cursor: "pointer",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                    },
                                }}
                            >
                                <Typography variant="h6"
                                            sx={{fontWeight: "600"}}>
                                    Our Mission
                                </Typography>
                                <Typography
                                    sx={{margin: "8px 0px"}}
                                    color={theme.palette.gray}
                                >
                                    Our mission at JBS Technology is clear – to
                                    deliver tailored technology solutions that
                                    not only meet but exceed the expectations of
                                    our clients. We strive to empower businesses
                                    by leveraging the latest advancements in
                                    technology, ensuring they stay ahead in an
                                    ever-evolving digital landscape.
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
                                    cursor: "pointer",
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                    },
                                }}
                            >
                                <Typography variant="h6"
                                            sx={{fontWeight: "600"}}>
                                    Who We Are
                                </Typography>
                                <Typography
                                    sx={{margin: "8px 0px"}}
                                    color={theme.palette.gray}
                                >
                                    At JBS Technology, we are more than just an
                                    IT company – we are innovators,
                                    problem-solvers, and partners dedicated to
                                    the success of our clients. With a passion
                                    for excellence and a commitment to
                                    delivering cutting-edge solutions, we
                                    empower businesses to thrive in today's
                                    rapidly evolving digital world.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </>
    );
}

export default MoreAbout;
