import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { useTheme } from "@emotion/react";

const MainCources = () => {
  const theme = useTheme();

  const courseInfo = [
    {
      id: "1",
      logo: CodeOffIcon,
      courseName: "Web Development",
      courseDescription:
        "From simple brochure sites to powerful web applications, we craft digital experiences that engage, convert, and grow your business.",
    },
    {
      id: "2",
      logo: CodeOffIcon,
      courseName: "App Development",
      courseDescription:
        "Got an app idea? We turn it into reality. From concept to launch, our experts build custom apps that solve problems and drive results.",
    },
    {
      id: "3",
      logo: CodeOffIcon,
      courseName: "Graphic Design",
      courseDescription:
        " We work closely with you to understand your brand values, target audience, and design preferences, ensuring that our designs align with your vision and goals.",
    },
    {
      id: "4",
      logo: CodeOffIcon,
      courseName: "E-commerce Development",
      courseDescription:
        "  We leverage cutting-edge technologies and industry best practices to create e-commerce websites that are visually appealing, easy to navigate, and optimized for conversions.",
    },
  ];

  return (
    <>
      <Box
        mt="40px"
        px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}
        sx={{ mt: "40px" }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: "600", fontSize: "35px" }}>
            What we do?
          </Typography>
          <Typography variant="body1" my={4}>
            We help entrepreneurs and business leaders build and launch
            innovative custom software solutions to the market across a range of
            verticals & industries. We can help you turn your vision into a
            successful product together, whether it’s in the form of a Minimum
            Viable Product, UX/UI services, full product custom software
            development or help to scale your company.
          </Typography>
        </Box>
        <Grid container spacing={2} >
          {courseInfo.map((course) => (
            <Grid item sm={6} lg={3} p={2} key={course.id}>
              <Box
                sx={{
                  border: `3px dashed ${theme.palette.primary.main}`,
                  padding: 3,
                  borderRadius: 2,
                  height:"100%",
                  cursor: "pointer",
                  transition: "all 0.5s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    "& > div": {
                      color: "#fff",
                      bgcolor: "primary.main",
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    color: "primary.main",
                    bgcolor: "#f7fafd",
                    transition: "all 0.5s",
                    marginBottom: 2,
                  }}
                >
                  {<course.logo />}
                </Box>
                <Typography
                  variant="h5"
                  fontWeight={500}
                  sx={{ marginY: "10px" }}
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
