import React, { useEffect, useState } from "react";
import { TitleAnimation } from "../../components/TitleAnimation";
import { Box, Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { data } from "./CareerCards";

export const CareerCardData = () => {
  const theme = useTheme();
  const { id } = useParams();
  const [careerData, setCareerData] = useState({});

  useEffect(() => {
    const singleData = data.find((val) => val.id == id);
    if (singleData && singleData.heading) {
      setCareerData(singleData);
    }
  }, [careerData]);

  const navigate = useNavigate();
  const handleButtonClick = (data) => {
    navigate(`/jobapply/${data}`);
  };
  return (
    <>
      <Box paddingY={9} mt={"50px"}>
        <TitleAnimation title={careerData?.heading} />
      </Box>

      <Box px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
        <Box mt={"40px"}>
          <Breadcrumbs>
            <Link to={"/careers"}>
              <Typography
                underline="none"
                href=""
                sx={{ fontSize: { xs: "14px", xl: "16px" } }}
                color={theme.palette.gray}
              >
                Career
              </Typography>
            </Link>
            <Link>
              <Typography
                underline="none"
                sx={{ fontSize: { xs: "14px", xl: "16px" } }}
                color={theme.palette.primary.main}
              >
                {careerData?.heading}
              </Typography>
            </Link>
          </Breadcrumbs>

          <Grid
            container
            xl={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={4} padding={2}>
              <img
                src={careerData?.image}
                alt="react"
                style={{ objectFit: "unset" }}
              />
            </Grid>
            <Grid
              item
              md={8}
              color={theme.palette.black.main}
              sx={{
                padding: { md: "15px" },
                fontSize: { xs: "14px", xl: "15px" },
                lineHeight: { lg: "20px", xl: "30px" },
              }}
            >
              <Typography variant="p">
                {careerData?.des1}
              </Typography>
              <Box marginY={2}>
                <Typography variant="p">
                {careerData?.des2}
                                 </Typography>
              </Box>

              <Typography variant="ul" lineHeight={2}>
                <li style={{ listStyle: "unset" }}>
                  <Typography
                    variant="strong"
                    sx={{
                      fontSize: { xs: "14px", xl: "18px" },
                      fontWeight: "bolder",
                    }}
                  >
                    Experience :
                  </Typography>
                  <Typography variant="p">{careerData?.experience}</Typography>
                </li>
                <li style={{ listStyle: "unset" }}>
                  <Typography
                    variant="strong"
                    sx={{
                      fontSize: { xs: "14px", xl: "18px" },
                      fontWeight: "bolder",
                    }}
                  >
                    Openings :
                  </Typography>
                  <Typography variant="p">{careerData?.openings}</Typography>
                </li>
                <li style={{ listStyle: "unset" }}>
                  <Typography
                    variant="strong"
                    sx={{
                      fontSize: { xs: "14px", xl: "18px" },
                      fontWeight: "bolder",
                    }}
                  >
                    Location :
                  </Typography>
                  <Typography variant="p">{careerData?.location}</Typography>
                </li>

                <Typography variant="h6" marginY={1} marginLeft={2}>
                  Responsibilities :
                </Typography>
                <li style={{ listStyle: "unset" }}>
                  <Typography variant="p">
                    {careerData?.responsibilities1}
                  </Typography>
                </li>
              </Typography>
            </Grid>
          </Grid>

          <Box>
            <Typography
              variant="ul"
              // fontSize={14}
              sx={{
                fontSize: { xs: "14px", xl: "15px" },
              }}
              lineHeight={2}
            >
              {careerData?.responsibilities?.map((data) => (
              <li style={{ listStyle: "unset" }}>
                <Typography variant="p">
                  {data}
                </Typography>
              </li>

              ))}


              <Typography variant="h6" marginY={1}>
                Requirements :
              </Typography>
              {careerData?.requirements?.map((data) => (
              <li style={{ listStyle: "unset" }}>
                <Typography variant="p">
                  {data}
                </Typography>
              </li>

              ))}
                         </Typography>
          </Box>
          <Box my={5} textAlign={"center"}>
            <Button
              variant="contained"
              sx={{ padding: "8px 40px", fontSize: "18px",backgroundColor:"#003361" }}
              onClick={() => handleButtonClick(careerData.heading)}
            >
              Apply For Job
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
