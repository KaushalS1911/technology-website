import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../../assets/images/Careers/new.webp";
import node from "../../assets/images/Careers/node-js-icon.webp";
import flutter from "../../assets/images/Careers/Flutter_Featured_Logo.webp";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image: img1,
    heading: "React.js Developer",
    descripition1: "Experience: 2 ",
    descripition2: "No of Openings: 1 ",
    descripition3: "Location: Surat, Gujarat.",
    id: 1,
    des1:"We are looking for a skilled react.js developer to join our front-end development team. In this role, you will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack. You will also be responsible for profiling and improving front-end performance and documenting our front-end codebase.",
    des2:"To ensure success as a react.js developer, you should have in-depth knowledge of JavaScript and React concepts, excellent front-end coding skills, and a good understanding of progressive web applications. Ultimately, a top-class react.js developer should be able to design and build modern user interface components to enhance application performance.",
    experience:" 1 years",
    openings : " 2",
    location : ' Surat, Gujarat.',
    responsibilities1:"Meeting with the development team to discuss user interface ideas and applications.",
    responsibilities:["Reviewing application requirements and interface designs.","Identifying web-based user interactions.","Developing and implementing highly responsive user interface components using react concepts.","Writing application interface codes using JavaScript following react.js workflows."],
    requirements:["Bachelor’s degree in computer science, information technology, or a similar field.","Previous experience working as a react.js developer.","In-depth knowledge of JavaScript, CSS, HTML, and front-end languages.","Knowledge of REACT tools including React.js, Webpack, Enzyme, Redux, and Flux.","Experience with user interface design."]
  },
  // {
  //   image: node,
  //   heading: "Node.js Developer",
  //   descripition1: "Experience: 2 ",
  //   descripition2: "No of Openings: 1 ",
  //   descripition3: "Location: Surat, Gujarat.",
  //   id: 2,
  // },
  // {
  //   image: flutter,
  //   heading: "Flutter Developer",
  //   descripition1: "Experience: 2 ",
  //   descripition2: "No of Openings: 1 ",
  //   descripition3: "Location: Surat, Gujarat.",
  //   id: 3,
  // },
];
export const CareerCards = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
        <Grid
          container
          spacing={3}
          alignItems={"center"}
          // justifyContent={"center"}
          paddingY={4}
        >
          {data.map((data, ind) => (
            <Grid
              key={ind}
              item
              md={4}
              sm={6}
              xs={12}
              onClick={() => navigate(`/career-card-data/${data.id}`)}
            >
              <Box
                bgcolor="white"
                sx={{
                  padding: "25px",
                  borderRadius: "15px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  transition: "0.5s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
                }}
              >
                <Box
                  sx={{
                    height: { xs: "100px", xl: "150px" },
                    width: { xs: "100px", xl: "150px" },
                  }}
                >
                  <img
                    src={data.image}
                    alt="dg"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "10px",
                    fontWeight: "600",
                    fontSize: { xl: "26px" },
                  }}
                >
                  {data.heading}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "8px",
                    color: `${theme.palette.gray}`,
                    fontSize: { xs: "13px", xl: "15px" },
                    letterSpacing: "0.5px",
                  }}
                >
                  {data.descripition1}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: `${theme.palette.gray}`,
                    fontSize: { xs: "13px", xl: "15px" },
                    letterSpacing: "0.5px",
                  }}
                >
                  {data.descripition2}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: `${theme.palette.gray}`,
                    fontSize: { xs: "13px", xl: "15px" },
                    letterSpacing: "0.5px",
                  }}
                >
                  {data.descripition3}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export { data };
