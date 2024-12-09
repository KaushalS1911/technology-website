import React from "react";
import { Grid, Typography, Box, Button } from '@mui/material';
import { useTheme } from "@emotion/react";
import B1 from "../../assets/images/blog/b1.jpg"
import B2 from "../../assets/images/blog/b2.jpg"
import B3 from "../../assets/images/blog/b3.jpg"
const blogs = [
    {
        img: B1, // Replace with actual image URL
        title: "Artificial Intelligence and Machine Learning",
        description: "Data is the prime aspect on which technology thrives on and safeguards.",
        date: "May 24, 2021",
        link: "#",
    },
    {
        img: B2,
        title: "Cloud Computing",
        description: "Machine learning in simple terms is the branch of artificial intelligence.",
        date: "May 14, 2021",
        link: "#",
    },
    {
        img: B3,
        title: "Cybersecurity Enhancements",
        description: "Technology is a sphere wherein there are new upgradations and inventions.",
        date: "June 22, 2021",
        link: "#",
    },
    // Add more blog objects as needed
];


export const BlogCard = () => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ padding: "20px" }} px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}>
                {/* Blog Grid */}
                <Grid container spacing={4}>
                    {blogs.map((blog, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    border: "1px solid #FAFAFA",
                                    borderRadius: "8px",
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                    overflow: "hidden",
                                    height : "100%"
                                }}
                            >
                                <img
                                    src={blog.img}
                                    alt={blog.title}
                                    style={{ width: "100%", height: "250px" }}
                                />
                                <Box sx={{ padding: "16px" }}>
                                    <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                                        {blog.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "#666", marginBottom: "8px" }}>
                                        {blog.description}
                                    </Typography>
                                    <Typography variant="caption" sx={{ display: "block", marginBottom: "16px" }}>
                                        {blog.date}
                                    </Typography>
                                    <Button variant="text" sx={{ color: "#0086FF" }} href={blog.link}>
                                        Read More >>
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};
