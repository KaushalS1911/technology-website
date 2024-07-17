import React, {useEffect, useRef} from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import logoB from "../../assets/images/herosection/B.png";
import logoJ from "../../assets/images/herosection/J.png";
import logoS from "../../assets/images/herosection/S.png";
// import {Swiper, SwiperSlide} from "swiper/react";
// import '../../../node_modules/swiper/swiper-bundle.min.css';
import jbslogo from "../../assets/images/herosection/jbslogo.png";
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import {useNavigate} from "react-router-dom";

//Placement Partners
import p1 from "../../assets/images/placementPartners/p1.png";
import p2 from "../../assets/images/placementPartners/p2.png";
import p3 from "../../assets/images/placementPartners/p3.png";
import p4 from "../../assets/images/placementPartners/p4.png";
import p5 from "../../assets/images/placementPartners/p5.png";
import p6 from "../../assets/images/placementPartners/p6.png";
import p7 from "../../assets/images/placementPartners/p7.png";
import p8 from "../../assets/images/placementPartners/p8.png";
import p9 from "../../assets/images/placementPartners/p9.png";
import p10 from "../../assets/images/placementPartners/p10.png";

//courses

import c1 from '../../assets/images/courses/web-dev.png'
import c2 from '../../assets/images/courses/game.png'
import c3 from '../../assets/images/courses/mobile app development.png'
import c4 from '../../assets/images/courses/UI-UX.png'
import c5 from '../../assets/images/courses/digital.png'

import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import OwlCarousel from "react-owl-carousel";

gsap.registerPlugin(ScrollTrigger);

const MainHomePage = () => {
    const logoBRef = useRef(null);
    const logoJRef = useRef(null);
    const logoSRef = useRef(null);
    const capRef = useRef(null);
    const logoRef = useRef(null);
    const theme = useTheme();
    const navigate = useNavigate()

    const isXlScreen = useMediaQuery(theme.breakpoints.down("1450"));
    const isLgScreen = useMediaQuery(theme.breakpoints.down("1050"));
    const isMdScreen = useMediaQuery(theme.breakpoints.down("900"));
    const isSmScreen = useMediaQuery(theme.breakpoints.down("800"));
    const isXScreen = useMediaQuery(theme.breakpoints.down("500"));
    const stopAnimation = useMediaQuery(theme.breakpoints.down("700"));

    const {contextSafe} = useGSAP();
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
    ]

    const options = {
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 4000,
        slideTransition: "linear",
        dots: false,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    };

    const companyImgArray = [p1, p2, p3, p4, p5, p6, p7, p10];


    function dekstopAnimation() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".heroSection",
                scroller: "body",
                scrub: isXlScreen ? 2 : 3,
                start: isXlScreen ? "top 10%" : "top top",
                end: isXlScreen ? "bottom 150%" : "bottom 100%",
                markers: false,
                ease: "power1.inOut",
            },
        })
            .to(
                logoBRef.current,
                {
                    duration: 1,
                    top: "27px",
                    scale: 0.625,
                    rotate: 0,
                    zIndex: 2,
                },
                "logo"
            )
            .to(
                logoJRef.current,
                {
                    duration: 1,
                    top: "-30px",
                    left: "0px",
                    scale: 0.5,
                    rotate: 0,
                    zIndex: 3,
                },
                "logo"
            )
            .to(
                logoSRef.current,
                {
                    duration: 1,
                    top: "-50px",
                    right: "-360px",
                    scale: 0.47,
                    rotate: 0,
                    zIndex: 2,
                },
                "logo"
            )
            .to(".letteredLogo", {
                duration: 1,
                opacity: 0,
            })

            .to(".mainLogo", {
                duration: 1,
                opacity: 1,
            })
            .to(".mainLogo", {
                duration: 3,
                scale: stopAnimation ? 1.5 : 2,
                right: stopAnimation ? "35%" : "7%",
                y: stopAnimation ? 200 : 380,
            })
            .to(".mainLogo", {
                duration: 2,
                right: stopAnimation ? "35%" : "45%",
                y: isMdScreen ? (stopAnimation ? (isXScreen ? 1150 : 1400) : 750) : 750,
                scale: 2.5,
                rotate: 360,
            })
            .to(".mainLogo", {
                duration: 1,
                right: "90%",
                y: isMdScreen ? isXScreen ? 1400 : 1150 : 1070,
                scale: 0,
            })
            .to(".colorAni", {
                scale: 1,
            }, "button")
            .to(".animationBtn",
                {
                    color: "#fff",
                }, "button"
            ).to(".logo3",
                {
                    rotate: 360,
                    scale: "1",
                }
            )
    }

    function mobileAnimation() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".heroSection",
                scroller: "body",
                scrub: 3,
                start: "top top",
                end: "bottom 400%",
                markers: false,
                // ease: "power1.inOut",
            },
        })
        tl.to(logoRef.current, {
            y: -50,
            duration: 2,
            opacity: 1,
        }).to(logoRef.current, {
            opacity: 0,
            y: -100,
            duration: 1,
        })
            .to(logoRef.current, {
                opacity: 0,
                y: -100,
                duration: 1,
            })
            .to(".mainLogo", {
                duration: 1,
                y: -50,
                opacity: 1,
            })
            .to(".mainLogo", {
                duration: 1,
                scale: 1.5,
                y: 280,
            })
            .to(".mainLogo", {
                duration: 1,
                scale: 2,
                y: 720,
            })
            .to(".mainLogo", {

                duration: 1,
                scale: 1.5,
                right: stopAnimation ? "35%" : "7%",
                y: 800 ,
            })
            .to(".mainLogo", {
                duration: 1,
                right: "80%",
                y: 1000,
                scale: 0,
            })
            // .to(".mainLogo", {
            //     duration: 3,
            //     right: "90%",
            //     y: isMdScreen ? isXScreen ? 1400 : 1250 : 1070,
            //     scale: 0,
            // })
            .to(".colorAni", {
                scale: 1,
            }, "button")
            .to(
                ".animationBtn",
                {
                    color: "white !important",
                },
                "button"
            )
    }

    const placementPartners = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

    useEffect(function contextSafe() {
        if (isXScreen) {
            mobileAnimation();
        } else {
            dekstopAnimation();
        }

    }, []);

    const handleButtonClick = (projectId) => {
        navigate(`/services/${projectId}`);
    };

    return (
        <>
            <Box className="heroSection" sx={{mb: {xs: "25px", md: "50px", lg: "100px", overflow: "hidden"}}}>
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "60vh",
                        }}
                    >
                        <Box
                            sx={{
                                width: {md: "626px", sm: "550px"},
                                textAlign: "center",
                                mt: {xs: "100px", lg: "140px"},
                            }}
                        >
                            <Typography
                                component={"h2"}
                                sx={{
                                    fontWeight: "600",
                                    lineHeight: "1.3",
                                    fontSize: {xs: "23px", sm: "30px", md: "40px"},
                                    position: "relative",
                                }}
                            >
                                Empowering digital journeys through visionary virtuality
                            </Typography>
                            <Typography
                                component={"p"}
                                sx={{
                                    my: {lg: "23px", xs: "15px"},
                                    fontSize: {xs: "12px", md: "14px"},
                                    fontWeight: "500",
                                    width: "80%",
                                    marginInline: "auto",
                                    color: "textGray",
                                }}
                            >
                                Power of innovation to transform businesses. As a leading technology solutions provider,
                                we are dedicated to driving excellence through cutting-edge solutions tailored to meet
                                your unique needs.
                            </Typography>
                            <button className="btn-blue" style={{cursor: "pointer",fontWeight: "600"}}
                                    onClick={() => navigate('/contact')}>Get a Free Quote Today
                            </button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            textAlign: "center",
                            display: "flex",
                            mb: "60px",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            className="letteredLogo"
                            sx={{
                                backgroundColor: "red",
                                width: "280px",
                                display: stopAnimation ? "none" : "block",
                                position: "relative",
                            }}
                        >
                            <img
                                src={logoJ}
                                alt="Logo J"
                                ref={logoJRef}
                                className="logoB"
                                style={{
                                    position: "absolute",
                                    top: isXlScreen ? "-400px" : "-480px",
                                    zIndex: "-1",
                                    left: isXlScreen
                                        ? isMdScreen
                                            ? "-420px"
                                            : "-810px"
                                        : "-800px",
                                    transform: "translate(-50%) rotate(-55deg)",
                                }}
                            />
                            <img
                                src={logoB}
                                alt="Logo B"
                                ref={logoBRef}
                                className="logoB"
                                style={{
                                    position: "absolute",
                                    top: isXlScreen ? isLgScreen ? isSmScreen ? "-1200px" : "-1500px" : "-1100px" : ("-800px"),
                                    zIndex: "-1",
                                    left: "50%",
                                    transform: "translate(-50%) rotate(48deg)",
                                }}
                            />
                            <img
                                src={logoS}
                                alt="Logo B"
                                ref={logoSRef}
                                className="logoS"
                                style={{
                                    position: "absolute",
                                    top: isXlScreen ? "-300px" : "-440px",
                                    zIndex: "-1",
                                    right: isXlScreen ? isMdScreen ? "-850px" : "-1200px" : "-1230px",
                                    transform: "translate(-50%) rotate(150deg)",
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        ref={logoRef}
                        sx={{
                            textAlign: "center",
                            opacity: "0",
                            mb: "50px",
                            display: stopAnimation ? "block" : "none",
                        }}
                    >
                        <img src={jbslogo} alt="jbs logo"/>
                    </Box>
                </Container>

                <Container sx={{position: "relative"}}>
                    <Box sx={{mt: stopAnimation ? "0px" : "550px"}}>
                        <Typography
                            component={"h2"}
                            sx={{fontWeight: 700, fontSize: "24px", textAlign: "center"}}
                        >
                            Our Placement Partners
                        </Typography>
                        <Box sx={{mt: "40px"}}>
                            <Grid container>
                                <Grid
                                    item
                                    xs={isXScreen ? 12 : 3}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: "center",
                                        textAlign: "center",
                                        mt: {xs: "100px", sm: "0px"}
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: "80px",
                                            objectFit: "contain",
                                            opacity: 0,
                                            position: "absolute",
                                            // right: isLgScreen ? "65%" : "75%",
                                            mb: "20px",
                                        }}
                                        className="mainLogo"
                                    >
                                        <img src={jbslogo} alt="logo" style={{height: "100%"}}/>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    xs={isXScreen ? 12 : 9}
                                    sx={{
                                        textAlign: "center",
                                        alignSelf: "center",
                                    }}>
                                    <OwlCarousel className="owl-them" {...options}>
                                        {companyImgArray.map((image, index) => (
                                            <div className="item" key={index}>
                                                <Grid container justifyContent="center">
                                                    <Grid sx={{padding: 1, height: "140px"}}
                                                          className="placement-company">
                                                        <img
                                                            src={image}
                                                            alt={`company-${index}`}
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit: "contain",
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box sx={{mt: "200px"}}>
                        <Grid container>
                            <Grid item xs={12} sm={9}>
                                <Box sx={{height: "400px", display: "flex", alignItems: "start"}}>
                                    <Typography
                                        component={"h2"}
                                        sx={{
                                            fontWeight: "500",
                                            fontSize: {xs: "28px", sm: "38px", md: "48px"},
                                            pr: {xs: "0px", sm: "60px", md: "100px"}
                                        }}
                                    >
                                        Unleash the Power of <Typography component={"span"} sx={{
                                        fontWeight: "600",
                                        fontSize: {xs: "28px", sm: "38px", md: "48px"},
                                        color: "darkBlue"
                                    }}> Innovation to Meet and Exceed </Typography>Your Business Needs
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{mt: stopAnimation ? "200px" : "300px"}}/>
                    <Box sx={{mt: stopAnimation ? "0" : "350px"}}>
                        <Box>
                            <Button
                                className="animationBtn"
                                sx={{
                                    position: "relative",
                                    borderRadius: "30px",
                                    px: "23px",
                                    backgroundColor: "white",
                                    border: "1px solid #1F1754 !important",
                                    color: "#1F1754",
                                    // color: "#fff",
                                    overflow: "hidden",
                                    zIndex: "1",
                                }}
                                variant="outlined"
                            >
                                01/05
                                <Box
                                    className="colorAni"
                                    sx={{
                                        position: "absolute",
                                        height: "100%",
                                        zIndex: "-1",
                                        width: "100%",
                                        borderRadius: "30px",
                                        transform: "scale(0)",
                                        backgroundColor: "#1F1754",
                                    }}
                                />
                            </Button>
                        </Box>
                    </Box>
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
                            <Grid item md={4} sm={6} xs={12}>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    width: "100%"
                                }}>
                                    <img src={jbslogo} alt={jbslogo} className={"logo3"}
                                         style={{transform: "scale(0)"}}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>

            </Box>
        </>
    );
};

export default MainHomePage;
