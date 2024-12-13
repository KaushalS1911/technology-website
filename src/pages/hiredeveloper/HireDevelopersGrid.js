import React from 'react';
import { Box, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import {useNavigate} from "react-router-dom";

const developers = [
    {
        title: 'Hire React/JS React Native Developers',
        description:
            '\n' +
            'React and React Native developers build high-performance web and mobile apps with user-friendly interfaces and seamless cross-platform experiences.',
        price: 'Starts From Hourly $15',
    },
    {
        title: 'Hire Node.JS Developers',
        description:
            'Node.js developers create fast, scalable server-side applications, specializing in real-time solutions, APIs, and microservices using JavaScript and the Node.js runtime.',
        price: 'Starts From Hourly $15',
    },
    {
        title: 'Hire Laravel Developers',
        description:
            '\n' +
            'Laravel developers build secure, scalable web applications using the Laravel PHP framework, ideal for custom solutions ranging from simple websites to enterprise applications.',
        price: 'Starts From Hourly $15',
    },
    {
        title: 'Hire Vue.JS Developers',
        description:
            'Vue.js developers build dynamic, scalable, and user-friendly web applications, leveraging the framework simplicity and versatility for exceptional front-end experiences.',
        price: 'Starts From Hourly $15',
    },
    {
        title: 'Hire PHP Developers',
        description:
            'PHP developers create dynamic, secure web applications using PHP and frameworks like Laravel, Symfony, and CodeIgniter, delivering custom solutions for business needs.',
        price: 'Starts From Hourly $15',
    },
];

const HireDevelopersGrid = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
            {/* Header */}
            <Typography variant="h4" align="center" gutterBottom pb={"20px"}>
                Hire Software Developers Aligned with Your Time Zone and Deadlines
            </Typography>

            {/* Grid Layout */}
            <Grid container spacing={3}>
                {developers.map((developer, index) => (
                    <Grid item xs={12} sm={6} md={4}  key={index}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {developer.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" style={{fontSize: "17px"}} paragraph>
                                    {developer.description}
                                </Typography>
                                <Button variant="contained" color="primary" style={{fontSize: "17px"}} onClick={() => navigate('/contact')} fullWidth>
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
