import {useTheme} from "@emotion/react";
import {
    Box,
    Button,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import staff1 from "../../assets/images/about/staff-1.jpg";
import staff2 from "../../assets/images/about/staff-2.jpg";
import staff3 from "../../assets/images/about/staff-3.jpg";
import staff4 from "../../assets/images/about/staff-4.jpg";
import staff5 from "../../assets/images/about/staff-5.jpg";
import staff6 from "../../assets/images/about/staff-6.jpg";
import staff7 from "../../assets/images/about/staff-7.jpg";
import staff8 from "../../assets/images/about/staff-8.jpg";
import React from "react";
import {Link} from "react-router-dom";

function IntroduceSection() {
    const theme = useTheme();
    return (
        <>
            <div className="introduce">
                <Box px={{xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem"}}>
                    <Grid
                        container
                        spacing={{md: 4, xs: 2}}
                        mb={2}
                        p={{md: "20px"}}
                        alignItems={"center"}
                    >
                        <Grid item xs={12} lg={6}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: "700",
                                    fontSize: "48px",
                                    lineHeight: "82.5px",
                                }}
                            >
                                Hello, we’re JBS.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                }}
                                color={theme.palette.gray}
                            >
                                At JBS Technology, we are a team of passionate
                                technologists dedicated to transforming
                                businesses through innovative IT solutions.
                                Founded on the belief that technology should be
                                an enabler rather than a barrier, we strive to
                                empower organizations of all sizes to reach
                                their full potential in the digital age.
                            </Typography>
                            <Link to="/portfolio">
                                <Button
                                    variant={"outline"}
                                    sx={{
                                        mt: 3,
                                        borderRadius: "30px",
                                        fontWeight: "bold",
                                        padding: "12px 42px",
                                        border: `2px solid ${theme.palette.primary.main}`,
                                        color: theme.palette.primary.main,
                                        backgroundColor: theme.palette.common.white,
                                        "&:hover": {
                                            backgroundColor: theme.palette.primary.main,
                                            color: theme.palette.common.white,
                                            borderColor: theme.palette.primary.main,
                                        },
                                    }}
                                >
                                    SEE OUR WORK
                                </Button>
                            </Link>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            sx={{display: "flex", justifyContent: "center"}}
                        >
                            <Box
                                sx={{
                                    height: {xs: "auto", lg: "560px"},
                                    maxWidth: "100%",
                                }}
                            >
                                <img
                                    src={staff1}
                                    alt={staff1}
                                    style={{borderRadius: "10px"}}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        xl={12}
                        spacing={{lg: 3, xs: 3}}
                        mb={2}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    height: "560px",
                                    maxWidth: "100%",
                                }}
                            >
                                <img
                                    src={staff2}
                                    alt={staff2}
                                    style={{borderRadius: "10px"}}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Box
                                sx={{
                                    height: "560px",
                                    maxWidth: "100%",
                                }}
                            >
                                <img
                                    src={staff3}
                                    alt={staff3}
                                    style={{borderRadius: "10px"}}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Box
                                sx={{
                                    height: "560px",
                                    maxWidth: "100%",
                                }}
                            >
                                <img
                                    src={staff4}
                                    alt={staff4}
                                    style={{borderRadius: "10px"}}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        spacing={{md: 4, xs: 2}}
                        mb={2}
                        p={{md: "20px"}}
                        alignItems={"center"}
                    >
                        <Grid item lg={6}>
                            <Box
                                sx={{
                                    height: {xs: "auto", lg: "560px"},
                                    maxWidth: "100%",
                                }}
                            >
                                <img
                                    src={staff5}
                                    alt={staff5}
                                    style={{borderRadius: "10px"}}
                                />
                            </Box>
                        </Grid>
                        <Grid item lg={6}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: "700",
                                    fontSize: "48px",
                                    lineHeight: "82.5px",
                                }}
                            >
                                Beyond work
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                }}
                                color={theme.palette.gray}
                            >
                                Beyond our technical expertise, what truly
                                sets us apart is our unwavering dedication to
                                customer satisfaction. We believe that the
                                success of our clients is the true measure of
                                our own success, and we go above and beyond to
                                deliver results that exceed their expectations.
                                Whether you're a small startup looking to
                                disrupt the market or a multinational
                                corporation seeking to streamline your
                                operations, JBS Technology is here to help you
                                achieve your goals. Join us on the journey to
                                digital transformation, and together, we can
                                build a brighter future powered by technology.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        xl={12}
                        spacing={{lg: 3, xs: 3}}
                        my={{md: 1, xs: 0.5}}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Grid item md={3} alignSelf="center">
                            <Box
                                sx={{
                                    height: "560px",
                                    maxWidth: "100%",
                                }}
                            >
                                <img
                                    src={staff6}
                                    alt={staff6}
                                    style={{borderRadius: "10px"}}
                                />
                            </Box>
                        </Grid>
                        <Grid item md={6} alignSelf="center">
                            <Box
                                sx={{
                                    height: "560px",
                                    maxWidth: "100%",
                                    borderRadius: "10px",
                                }}
                            >
                                <img
                                    src={staff7}
                                    alt={staff7}
                                    style={{borderRadius: "10px"}}
                                />
                            </Box>
                        </Grid>
                        <Grid item md={3} alignSelf="center">
                            <Box
                                sx={{
                                    height: "560px",
                                    maxWidth: "100%",
                                }}
                            >
                                <img
                                    src={staff6}
                                    alt={staff6}
                                    style={{borderRadius: "10px"}}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
}

export default IntroduceSection;
