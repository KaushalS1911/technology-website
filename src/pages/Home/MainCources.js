import {Box, Grid, Typography} from "@mui/material";
import React from "react";
import webser1 from "../../assets/images/home-image/web-dev.png";
import webser2 from "../../assets/images/home-image/app-dev.png";
import webser3 from "../../assets/images/home-image/web-design.png";
import webser4 from "../../assets/images/home-image/ecomm-development.png";
import {useTheme} from "@emotion/react";

const MainCources = () => {
    const theme = useTheme();

    const courseInfo = [
        {
            id: "1",
            image:webser1,
            courseName: "Web Development",
            courseDescription:
                "From simple brochure sites to powerful web applications, we craft digital experiences that engage, convert, and grow your business.",
        },
        {
            id: "2",
            image:webser2,
            courseName: "App Development",
            courseDescription:
                "Got an app idea? We turn it into reality. From concept to launch, our experts build custom apps that solve problems and drive results.",
        },
        {
            id: "3",
            image:webser3,
            courseName: "Graphic Design",
            courseDescription:
                " We work closely with you to understand your brand values, target audience, and design preferences, ensuring that our designs align with your vision and goals.",
        },
        {
            id: "4",
            image:webser4,
            courseName: "E-commerce Development",
            courseDescription:
                "  We leverage cutting-edge technologies and industry best practices to create e-commerce websites that are visually appealing, easy to navigate, and optimized for conversions.",
        },
    ];

    return (
        <>
            <Box
                mt="40px"
                px={{xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem"}}
                sx={{mt: "40px"}}
            >
                <Box>
                    <Typography variant="h3"
                                sx={{fontWeight: "600", fontSize: "35px"}}>
                        What we do?
                    </Typography>
                    <Typography variant="body1" my={4}>
                        In a rapidly evolving digital landscape, staying ahead
                        requires more than just keeping up; it demands
                        innovation. At JBS Technology, we harness the latest
                        technologies to empower businesses like yours with
                        solutions that redefine possibilities. From bespoke
                        software development to scalable cloud solutions, our
                        expertise knows no bounds.
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    {courseInfo.map((course) => (
                        <Grid item sm={6} lg={3} p={2} key={course.id}>
                            <Box
                                sx={{
                                    border: `2px dashed ${theme.palette.primary.main}`,
                                    padding: 3,
                                    borderRadius: 2,
                                    height:"100%",cursor: "pointer",
                                }}
                            >
                                <Box
                                    sx={{
                                        height: "80px",
                                        width: "80px",
                                        borderRadius: "50%",
                                        display: "grid",
                                        placeItems: "center",
                                        color: "primary.main",
                                        bgcolor: "#f7fafd",
                                        transition: "all 0.5s",
                                        marginBottom: 2,
                                    }}
                                >
                                  <img src={course.image} alt="images" />
                                </Box>
                                <Typography
                                    variant="h5"
                                    fontWeight={500}
                                    sx={{marginY: "10px"}}
                                >
                                    {course.courseName}
                                </Typography>
                                <Typography variant="body2">
                                    {course.courseDescription}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default MainCources;
