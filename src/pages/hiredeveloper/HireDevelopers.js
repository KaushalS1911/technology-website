import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import {TitleAnimation} from "../../components/TitleAnimation";
import { useTheme } from "@emotion/react";
import {BlogCard} from "../blog/BlogCard";
import theme from "../../components/theme";
import HireDevelopersGrid from "./HireDevelopersGrid";



const HireDevelopers = () => {
    return (
        <Box bgcolor={theme.palette.backgroundLiteGrey}>
            <Box bgcolor={"white"} paddingY={9} my={"40px"}>
                <TitleAnimation title="Hire Dedicated Developers India" />
            </Box>
            <Box mt={"40px"} pb={"80px"} px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
                <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
                    {/* Main Grid Container */}
                    <Grid container spacing={3} >
                        {/* Left Content */}
                        <Grid item xs={12} md={12}>
                            <Typography variant="h4" gutterBottom>
                                Hire Dedicated Indian Software Developers
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Developing web and mobile applications is a monotonous job, and successful deployment of projects undergo various stages.
                                So, hire dedicated developers in India to take care of all the stages of development of your project.
                            </Typography>
                            {/* Image Section */}
                            {/* Subheadings */}
                            <Typography variant="h5" gutterBottom>
                                Hire Dedicated dot net/Asp.Net Developers - Hire C# MVC Developers
                            </Typography>
                            <Typography variant="body1" paragraph>
                                DDot Net is a great web development platform that offers complete software infrastructure, a programming model, and different services needed to create robust applications.
                            </Typography>
                            <Typography variant="h5" gutterBottom>
                                Hire Dedicated Developers for Node JS
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Speed, productivity, and scalability are essential while opting for Node JS as a project development platform.
                            </Typography>
                            <Box mb={4}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Hire Dedicated dot net/Asp.Net Developers - Hire C# MVC Developers
                                </Typography>
                                <Typography variant="body1">
                                    DDot Net is a great web development platform that offers complete software infrastructure, a programming model,
                                    and different services needed to create robust applications.{" "}
                                    <strong>Hire dot net developers</strong> / Hire C# MVC developers / hire remote developers from Rushkar Pvt
                                    Ltd in Bharat as they are highly proficient and trained in using various technologies like C#, C# MVC, .Net,
                                    Asp.Net, Ajax, VB.Net, and more.
                                </Typography>
                            </Box>

                            {/* Section: Hire Dedicated Developers for Node JS */}
                            <Box mb={4}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Hire Dedicated Developers for Node JS
                                </Typography>
                                <Typography variant="body1">
                                    Speed, productivity, and scalability are essential while opting for Node JS as a project development platform.
                                    It lets developers write JavaScript both on the server side and the client side. Hire Node JS developers from
                                    Rushkar who are passionate about creating scalable network applications using the Node JS framework.
                                </Typography>
                            </Box>

                            {/* Section: Hire Dedicated Developers for Frontend */}
                            <Box mb={4}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Hire Dedicated Developers for Frontend
                                </Typography>
                                <Typography variant="body1">
                                    Whether you want front-end developers for your current website or a new one, we have the specialists you
                                    need. Hire Front-end developers from Rushkar to get the expertise you need for your project development. Our
                                    experts will help you maximize the user experience through user-friendly, interactive, and responsive
                                    front-end designs.
                                </Typography>
                            </Box>

                            {/* Section: Advantages of Hiring Developers */}
                            <Box mb={4}>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    Advantages of Hiring Dedicated Developers from Rushkar
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Rushkar has a big pool of experienced, skilled, and talented mobile and web developers to convert ideas into
                                    reality cost-effectively. All our dedicated developers have many years of experience in offering solutions to
                                    big and small businesses worldwide. Below are the many benefits of hiring our dedicated developers:
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="Flexibility in Price and Time"
                                            secondary="Do you have time constraints but wish to create a project? Don't worry, and you can count on our dedicated developers. Avail and experience our top-notch technical expertise for your project development."
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Work With Supremacy"
                                            secondary="As the work quality is for the long term, simply being satisfied isn't in our dictionary. All our developers are committed to delivering high standards for your project."
                                        />
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>


                    </Grid>
                </Box>
            <HireDevelopersGrid/>
            </Box>
        </Box>
    );
};

export default HireDevelopers;
