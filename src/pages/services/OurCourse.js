import React, { useState } from 'react';
import c1 from '../../assets/images/courses/web-dev.png'
import c2 from '../../assets/images/courses/game.png'
import c3 from '../../assets/images/courses/mobile app development.png'
import c4 from '../../assets/images/courses/UI-UX.png'
import c5 from '../../assets/images/courses/digital.png'
import {
    Box,
    Container,
    Grid,
} from "@mui/material";
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import {useNavigate} from "react-router-dom";

const OurCourse = () => {

    const navigate = useNavigate()

    const handleButtonClick = (projectId) => {
        navigate(`/services/${projectId}`);
    };

    const courseData = [
        {
            id: "Web-Development",
            title: "Web Development",
            desc: "From sleek brochure sites to robust web applications, we craft digital experiences that captivate, convert, and elevate your business.",
            img: c1
        },
        {
            id: "Game-Development-Services",
            title: "Game Development",
            desc: "At JBS Technology, we create captivating, high-quality games with a collaborative team of skilled developers, designers, and artists.",
            img: c2
        },
        {
            id: "Mobile-App-Development",
            title: "Mobile App Development",
            desc: "Turn your app idea into reality with our expertise. From concept to launch, we develop bespoke applications that deliver measurable outcomes.",
            img: c3
        },
        {
            id: "UI-UX-design",
            title: "UI/UX Designing",
            desc: "UI (User Interface) and UX (User Experience) design are fundamental components critical to the success of any digital product.",
            img: c4
        },
        {
            id: "Digital-Marketing-Services",
            title: "Digital Marketing",
            desc: "At JBS Technology, we boost your online presence with tailored digital marketing strategies for optimal engagement and conversions.",
            img: c5
        },
        {
            id: "Digital-Marketing-Services",
            title: "Digital Marketing",
            desc: "At JBS Technology, we boost your online presence with tailored digital marketing strategies for optimal engagement and conversions.",
            img: c5
        },
    ]

    return (
        <Container maxWidth="lg" sx={{ paddingY: '40px', backgroundColor: '#f9f9f9' }}>
            <Box mt={"40px"}>
                <Grid container spacing={5}>
                    {courseData?.map((item) => (
                        <Grid item md={4} sm={6} xs={12}>
                            <Box sx={{
                                cursor: "pointer",
                                position: "relative",
                                height: "362px",
                                // width: {sm:"384px",xs: "100%"},
                                borderRadius: "17px",
                                overflow: "hidden",
                                '&:hover .details': {top: "45%"}
                            }} onClick={() => handleButtonClick(item.id)}>
                                <Box sx={{position: "absolute", height: "100%", width: "100%"}}>
                                    <img src={item.img} alt={item.img}
                                         style={{height: "100%", width: "100%", objectFit: "cover"}}/>
                                </Box>
                                <Box sx={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                    background: " linear-gradient( rgba(0, 0, 0, 0) 0%,rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 1) 100%)"
                                }}/>
                                <Box sx={{
                                    position: "absolute",
                                    color: "white",
                                    px: {sm: "30px", xs: "20px"},
                                    top: "88%",
                                    transition: "0.5s"
                                }} className={"details"}>
                                    <Box sx={{
                                        fontSize: "21px",
                                        fontWeight: "600",
                                        mb: "18px"
                                    }}>{item.title}</Box>
                                    <Box sx={{
                                        fontSize: "12px",
                                        letterSpacing: "0.6px",
                                        fontWeight: "300"
                                    }}>{item.desc}</Box>
                                    <Box sx={{
                                        backgroundColor: "white",
                                        width: "100%",
                                        p: "15px",
                                        py: "13px",
                                        borderRadius: "30px",
                                        mt: "10px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        position: "relative"
                                    }}>
                                        <Box sx={{color: "#000", fontSize: "15px", fontWeight: "600"}}>Know
                                            More</Box>
                                        <Box sx={{
                                            color: "#fff",
                                            backgroundColor: "darkBlue",
                                            position: "absolute",
                                            top: "50%",
                                            right: "1%",
                                            py: "4px",
                                            px: "8px",
                                            borderRadius: "50%",
                                            transform: "translateY(-50%)"
                                        }}><EastRoundedIcon sx={{mt: "3px"}}/></Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default OurCourse;
