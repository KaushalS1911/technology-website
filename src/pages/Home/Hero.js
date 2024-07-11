import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import React from "react";
import heroImage from "../../assets/images/home-image/3c.webp";
import {useTheme} from "@emotion/react";
import {Link} from "react-router-dom";

const Hero = () => {
    const theme = useTheme();
    return (
        <>
            <Box
                px={{xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem"}}
                sx={{mt: "104px"}}
            >
                <Grid
                    container
                    alignItems="center"
                    sx={{
                        alignItems: "center",
                        height: "auto",
                    }}
                >
                    <Grid item md={6} order={{xs: 2, md: 1}}>
                        <Box>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: "25px",
                                    fontWeight: "500",
                                    mb: 2
                                }}
                            >
                                Crafting luxury through every line of code
                            </Typography>

                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: {xs: "35px", lg: "45px"},
                                    fontWeight: "600",
                                    mb: 2,
                                }}
                            >
                                Empowering digital journeys through visionary virtuality
                                <Typography
                                    component="span"
                                    sx={{
                                        color: `${theme.palette.primary.main}`,
                                        display: "inline",
                                        fontSize: {xs: "35px", lg: "45px"},
                                        fontWeight: "600",
                                    }}
                                >
                                    {` Redefine the frontier of IT solutions`}
                                </Typography>
                            </Typography>
                            <Typography variant="body2" fontSize={16}
                                        fontWeight="400" mb={2}>
                                Power of
                                innovation to transform businesses. As a leading
                                technology solutions provider, we are dedicated
                                to driving excellence through cutting-edge
                                solutions tailored to meet your unique needs.
                                With a passion for creativity and a commitment
                                to delivering results, we stand as your reliable
                                partner on the journey to success.
                            </Typography>
                            <Stack
                                sx={{marginY: 2}}
                                component={Box}
                                direction={{xs: "column", sm: "row"}}
                            >
                                <Link to="/contact">
                                    <Button
                                        variant="contained"
                                        sx={{
                                            borderRadius: 4,
                                            padding: 1,
                                            width: {xs: "100%", sm: "200px"},
                                        }}
                                    >
                                        Contact Us
                                    </Button>
                                </Link>
                                <Link to="/portfolio">
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: 4,
                                            marginX: {xs: 0, sm: 2},
                                            marginY: {xs: 2, sm: 0},
                                            width: {xs: "100%", sm: "200px"},
                                            padding: 1,
                                        }}
                                    >
                                        See Portfolio
                                    </Button>
                                </Link>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        md={6}
                        pb={{xs: 5, md: 0}}
                        order={{xs: 1, md: 2}}
                        display="flex"
                        justifyContent="center"
                    >
                        <Box sx={{width: {sm: "65%", md: "100%"}}}>
                            <img src={heroImage} alt="hero"/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Hero;
