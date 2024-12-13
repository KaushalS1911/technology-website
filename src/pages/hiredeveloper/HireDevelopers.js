import React from 'react';
import { Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import {TitleAnimation} from "../../components/TitleAnimation";
import { useTheme } from "@emotion/react";
import {BlogCard} from "../blog/BlogCard";
import theme from "../../components/theme";
import HireDevelopersGrid from "./HireDevelopersGrid";



const   HireDevelopers = () => {
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
                            <Typography variant="body1" paragraph marginBottom={"50px"}>
                                DDot Net is a great web development platform that offers complete software infrastructure, a programming model, and different services needed to create robust applications.
                            </Typography>
                            <Typography variant="h5" gutterBottom >
                                Why Choose Us for Developer Hiring?
                            </Typography>
                            <Typography fontSize={"18px"} gutterBottom>
                                <strong>Diverse Expertise: </strong>
                                Developers skilled in web, mobile, software, and cloud solutions, with proficiency in modern technologies such as React, Angular, Vue.js, Node.js, Python, and more.
                            </Typography>
                            <Typography fontSize={"18px"} gutterBottom>
                                <strong>Agile Methodology: </strong>
                                We follow agile practices for iterative and flexible development, ensuring that projects are completed efficiently and on schedule.
                            </Typography>
                            <Typography fontSize={"18px"} gutterBottom>
                                <strong>Scalable Solutions: </strong>
                                From small apps to enterprise-level systems, our developers create scalable solutions tailored to your business requirements.
                            </Typography>
                            <Typography fontSize={"18px"} gutterBottom>
                                <strong>Global Talent Pool: </strong>
                                Access top-tier developers from various backgrounds and locations to bring the best skills to your team.
                            </Typography>
                            <Typography fontSize={"18px"} gutterBottom>
                                <strong>End-to-End Services: </strong>
                                From planning and design to development and maintenance, we offer comprehensive services to ensure seamless project execution.
                            </Typography>
                            <Typography fontSize={"18px"} gutterBottom marginBottom={"50px"}>
                                <strong>Seamless Collaboration: </strong>
                                Our developers work closely with your in-house teams, ensuring smooth communication and alignment with your goals.
                            </Typography>



                            <Typography variant="h5"  gutterBottom >
                                Why Choose Us for Your Developer Needs?
                            </Typography>
                            <Typography fontSize={"18px"} gutterBottom>
                                <strong>Proven Track Record: </strong>
                                We’ve successfully delivered numerous projects across various industries, demonstrating our ability to drive results.
                            </Typography>
                            <Typography fontSize={"18px"} gutterBottom>
                                <strong>Flexible Engagement Options: </strong>
                                Whether you need a single developer for a short-term project or a full team for long-term development, we offer scalable solutions that meet your needs.
                            </Typography>
                            <Typography fontSize={"18px"} gutterBottom marginBottom={"50px"}>
                                <strong>Commitment to Excellence: </strong>
                                Our developers are committed to producing high-quality, well-tested, and reliable software that exceeds your expectations.
                            </Typography>

                            <Typography variant="h5" gutterBottom>
                                Hire Dedicated Developers for Node JS
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Speed, productivity, and scalability are essential while opting for Node JS as a project development platform.
                            </Typography>

                            <Box marginBottom={"60px"}>

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
