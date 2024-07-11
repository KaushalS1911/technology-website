import {Box, Grid, Typography} from "@mui/material";
import React from "react";
import {useTheme} from "@emotion/react";
import {Counter} from "../../components/global/Counter";
import MileStone from "../Home/MileStone";
import PhoneIcon from "@mui/icons-material/Phone";
import {Link} from "react-router-dom";
import right from '../../assets/images/about/card-right.png'
import rotate from '../../assets/images/about/card-rotate.png'
function MoreAbout() {
    const theme = useTheme();
    return (
        <>
            <MileStone />
            <Box px={{xs: "1rem", sm: "4rem", md: "6rem", xl: "8rem"}}>
                <div className="MoreAboutSection" style={{margin: "40px 0px"}}>
                    <Grid
                        container
                        sx={{
                            my: "10px",
                        }}
                        // spacing={2}
                    >
                        <Grid md={5} xs={12} my={{xs:2,sm:10,md:"unset"}} overflowX={{xs:"hidden",md:"unset"}}>
                            <Box sx={{position:"relative",height:"100%"}}>

                                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}}>
                                    <Box sx={{ height:"300px",width: {md:"400px",xs:"300px"}}}>
                                        <img src={right} alt="rotate" style={{objectFit:"contain"}} />
                                    </Box>
                                </Box>
                                    <Box sx={{position:"absolute",top: {md:"13%",xs:"-35%"},left: {xs:"10%",sm:"25%",md:"-20%",lg:"-10%",xl:"3%"},animation: "rotate 7s linear infinite",height:"500px",width: {xs:"400px",md:"600px"} ,display:{xs:"none",sm:"block"}}}>
                                        <img src={rotate} alt="rotate" style={{objectFit:"contain"}} />
                                    </Box>
                            </Box>

                        </Grid>
                       <Grid xs={12} md={7} >
                          <Box marginLeft={{md:7}}>
                              <Grid
                                  item
                                  md={4}
                                  sm={6}
                                  sx={{
                                      margin: {sm:"20px 0 0 25%"},
                                  }}
                              >

                                  <Box className="contact-info-box bg-light p-4" sx={{textAlign:"unset",height:"210px",width: {sm:"300px",xs:"100%"}}}>
                                      <Typography
                                                  sx={{fontWeight: "600",fontSize:"18px",color:"#0E314C"}}>
                                          Our History
                                      </Typography>
                                      <Typography
                                          sx={{margin: "8px 0px",fontSize:"14px"}}
                                          color={theme.palette.gray}
                                      >
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
                                      margin: "20px 0px",
                                  }}
                              >
                                  <Box className="contact-info-box bg-light p-4" sx={{textAlign:"unset",height:"210px",width: {sm:"300px",xs:"100%"}}}>
                                      <Typography
                                                  sx={{fontWeight: "600",fontSize:"18px",color:"#0E314C"}}>
                                          Our Mission
                                      </Typography>
                                      <Typography
                                          sx={{margin: "8px 0px",fontSize:"14px"}}
                                          color={theme.palette.gray}
                                      >
                                          Our mission at JBS Technology is clear – to
                                          deliver tailored technology solutions that
                                          not only meet but exceed the expectations of
                                          our clients.
                                      </Typography>
                                  </Box>
                              </Grid>
                              <Grid
                                  item
                                  md={4}
                                  sm={6}
                                  sx={{
                                      margin: {sm:"20px 0 0 25%"},
                                  }}
                              >
                                  <Box className="contact-info-box bg-light p-4" sx={{textAlign:"unset",height:"210px",width: {sm:"300px",xs:"100%"}}}>
                                      <Typography
                                                  sx={{fontWeight: "600",fontSize:"18px",color:"#0E314C"}}>
                                          Who We Are
                                      </Typography>
                                      <Typography
                                          sx={{margin: "8px 0px",fontSize:"14px"}}
                                          color={theme.palette.gray}
                                      >
                                          At JBS Technology, we are more than just an
                                          IT company – we are innovators,
                                          problem-solvers, and partners dedicated to
                                          the success of our clients.
                                      </Typography>
                                  </Box>
                              </Grid>
            </Box>
                       </Grid>

                    </Grid>
                </div>
            </Box>
        </>
    );
}

export default MoreAbout;
