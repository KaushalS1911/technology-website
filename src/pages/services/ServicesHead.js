import React from 'react'
import {Box,Grid, Typography} from "@mui/material";
import {useTheme} from '@emotion/react';


const ServiceHead = () => {
    const theme = useTheme()

    return (
        <Box px={{xs: "2rem", sm: "4rem", md: "6rem", xl: "19rem"}}>
            <Grid>
                <Grid item lg={9} xs={11} sx={{py: {xs: 8, md: 13}}}>
                    <Box
                        sx={{
                            fontSize: {md: "40px", xs: "32px"},
                            lineHeight: "1.2"
                        }}
                    >
                        <Typography variant="div" fontWeight="bold">
                            Our expertise spans various domains,
                            allowing us to tailor our services to meet your
                            unique needs.{" "}
                            <Typography variant="span"
                                        color={theme.palette.primary.main}>
                              Explore the cutting-edge services we
                              provide
                            </Typography>
                        </Typography>
                    </Box>
                    <Box className="service_paragraph" sx={{my: "20px"}}>
                        <Typography>
                            Together, we can transform your vision into a
                            thriving business,
                            be it through a Minimum Viable Product, UX/UI
                            services, or scaling
                            support for your company.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};


export default ServiceHead;
