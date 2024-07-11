import React from "react";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink, useParams } from "react-router-dom";
// import FiberManualRecordIcon from "@mui/icons-material/CheckCircle";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {course} from "./MainCources";
import back from '../../assets/images/home-image/back-img.png'


function BoxDetailPage() {
  const theme = useTheme();


  const { detId } = useParams();
  const project = course.find((p) => p.id.toString() === detId);

  return (
    <Box mt={13}>
      <div
        id="bannerSlider"
        className="position-relative"
        style={{
          padding: "150px 0px",
          marginTop: "40px",
          backgroundImage: `url(${back})`,
          backgroundSize:"cover",
          backgroundRepeat:"no-repeat"
        }}
      >
        <Box textAlign="center" color={"white !important"}>
          <Box sx={{ fontSize: "35px", fontWeight: "600" }}>
            {project?.title}
          </Box>
          <Box display={"flex"} justifyContent={"center"} mt={2}>
            <Box
              sx={{
                height: "3px",
                width: "100px",
                backgroundColor: "#B3DBFF",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  height: "13px",
                  width: "13px",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "50%",
                  left: "0%",
                  transform: "translateY(-50%)",
                  animation: "run 2s infinite linear alternate-reverse",
                }}
                bgcolor={theme.palette.primary.main}
              ></Typography>
            </Box>
          </Box>
          <Box
            sx={{ marginTop: "20px" }}
            display={"flex"}
            justifyContent={"center"}
          >
            <Breadcrumbs aria-label="breadcrumb" color={"white"}>
              <Link
                component={RouterLink}
                to="/services"
                color="white"
                underline="none"
              >
                <Box sx={{ color: "white" }}>Services</Box>
              </Link>
              <Link
                component={RouterLink}
                to="/"
                color="white"
                underline="none"
                sx={{ pointerEvents: "none", cursor: "default" }}
              >
                <Box sx={{ color: "white" }}>{project?.title}</Box>
              </Link>
            </Breadcrumbs>
          </Box>
        </Box>
      </div>
      <Box>
        <Container maxWidth="lg">
          <Box mt={3}>
            <Box >
              <Typography sx={{ fontSize: "16px", color: "#121212" }} my={1}>
                {project?.dec}
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={4} alignItems="center" mt={3}>
            <Grid item xs={12} md={7}>
              <Typography
                variant="h4"
                mb={2}
                component="h1"
                sx={{ fontSize: "24px", fontWeight: "600", color: "black" }}
                mx={3}
              >
                {project?.secondTitle}
              </Typography>
              <List>
                {project?.details1 &&
                  project?.details1?.map((text, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <FiberManualRecordIcon sx={{fontSize:"15px"}}/>
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
              </List>
            </Grid>
            <Grid item xs={12} md={5} p={0}>
              <Box>
                <img
                  src={project?.img}
                  alt={project?.img}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" my={3}>
            <Grid item xs={12} md={12}>
              <Typography
                variant="h4"
                mb={2}
                component="h1"
                sx={{ fontSize: "24px", fontWeight: "600", color: "black" }}
                mx={2}
              >
                {project?.thirdTitle}
              </Typography>
              <List>
                {project?.details2 &&
                  project?.details2.map((text, index) => (
                    <ListItem key={index}>
                      <ListItemIcon sx={{}}>
                        <FiberManualRecordIcon sx={{fontSize:"15px"}}/>
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
              </List>
              <Typography
                // textAlign={"center"}
                mt={2}
                sx={{ fontSize: "18px", fontWeight: "500" }}
              >
                {project?.partner}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default BoxDetailPage;
