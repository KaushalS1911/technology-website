import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import {useNavigate} from "react-router-dom";

const developers = [
    {
        title: 'Hire Ruby on Rails Developers',
        description:
            'Rushkar is your one-stop destination for hiring the best and most experienced Ruby on Rails developers to build robust, reliable, sustainable web apps at reasonable prices.',
        price: 'Starts From Hourly $15',
    },
    {
        title: 'Hire React/JS React Native Developers',
        description:
            'Our company Rushkar is a community for the best React JS/React Native developers, engineers, designers, coders, builders, and strategists worldwide.',
        price: 'Starts From Hourly $15',
    },
    {
        title: 'Hire Node.JS Developers',
        description:
            'To create standards-compliant apps, employ efficient NodeJS developers. Rushkar is the perfect technological ally for your NodeJS development.',
        price: 'Starts From Hourly $15',
    },
    {
        title: 'Hire Laravel Developers',
        description:
            'You may quickly engage a Laravel design team or a specialized developer with Rushkar for the consistent creation of stunning apps and web services.',
        price: 'Starts From Hourly $15',
    },
    {
        title: 'Hire Spree Commerce Developers',
        description:
            'Employ Spree Commerce designers from us to create a business using our skilled team’s artistic abilities. Rushkar has successfully designed Spree Commerce plugins.',
        price: 'Starts From Hourly $15',
    },
    {
        title: 'Hire Blockchain Developers',
        description:
            'Engage with the best Blockchain Developers on the market. Rushkar is a community that provides specialized blockchain developers and consulting networks.',
        price: 'Starts From Hourly $15',
    },
    {
        title: 'Hire Vue.JS Developers',
        description:
            'We are specialists in designing high-octane quality-obsessed, authentic apps, with demonstrated skills in Vue.js app development.',
        price: 'Starts From Hourly $15',
    },
    {
        title: 'Hire PHP Developers',
        description:
            'Rushkar is a well-known web development company that specializes in PHP-based services. Our technical competence combines agile methodologies to provide a wide range of PHP-related services.',
        price: 'Starts From Hourly $15',
    },
];

const HireDevelopersGrid = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
            {/* Header */}
            <Typography variant="h4" align="center" gutterBottom pb={"20px"}>
                Hire Software Developers to work according to your time zone, deadline, and milestone
            </Typography>

            {/* Grid Layout */}
            <Grid container spacing={3}>
                {developers.map((developer, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {developer.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" paragraph>
                                    {developer.description}
                                </Typography>
                                <Button variant="contained" color="primary" onClick={() => navigate('/contact')} fullWidth>
                                    {developer.price}
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HireDevelopersGrid;
