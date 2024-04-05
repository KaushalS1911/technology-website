import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../../assets/images/Careers/new.webp";
import node from "../../assets/images/Careers/node-js-icon.png";
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
  },
  {
    image: node,
    heading: "Node.js Developer",
    descripition1: "Experience: 2 ",
    descripition2: "No of Openings: 1 ",
    descripition3: "Location: Surat, Gujarat.",
    id: 2,
  },
  {
    image: flutter,
    heading: "Flutter Developer",
    descripition1: "Experience: 2 ",
    descripition2: "No of Openings: 1 ",
    descripition3: "Location: Surat, Gujarat.",
    id: 3,
  },
  {
    image: img1,
    heading: "React.js Developer",
    descripition1: "Experience: 2 ",
    descripition2: "No of Openings: 1 ",
    descripition3: "Location: Surat, Gujarat.",
    id: 4,
  },
  {
    image: img1,
    heading: "React.js Developer",
    descripition1: "Experience: 2 ",
    descripition2: "No of Openings: 1 ",
    descripition3: "Location: Surat, Gujarat.",
    id: 5,
  },
  {
    image: img1,
    heading: "React.js Developer",
    descripition1: "Experience: 2 ",
    descripition2: "No of Openings: 1 ",
    descripition3: "Location: Surat, Gujarat.",
    id: 6,
  },
];
export const CareerCards = () => {
  const theme = useTheme();
  const navigate = useNavigate()
  return (
    <>
      <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
        <Grid
          container
          spacing={3}
          alignItems={"center"}
          justifyContent={"center"}
          marginY={4}
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
                  padding: "25px 15px",
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
                    fontWeight: "700",
                    fontSize: { xl: "30px" },
                  }}
                >
                  {data.heading}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: "8px",
                    color: `${theme.palette.gray}`,
                    fontSize: { xs: "13px", xl: "17px" },
                    letterSpacing: "0.5px",
                  }}
                >
                  {data.descripition1}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: `${theme.palette.gray}`,
                    fontSize: { xs: "13px", xl: "17px" },
                    letterSpacing: "0.5px",
                  }}
                >
                  {data.descripition2}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: `${theme.palette.gray}`,
                    fontSize: { xs: "13px", xl: "17px" },
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
