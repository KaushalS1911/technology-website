import React from "react";
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {useTheme} from "@emotion/react";
import nectarImg from "../../assets/images/portfolio/nectar-2 (1) 1.webp";
import nectarlogo from "../../assets/images/portfolio/Group 1 1.webp";
import project1 from "../../assets/images/portfolio/hedger-min.jpg"
import stocklogo from "../../assets/images/portfolio/sytock logo.webp"
import project2 from "../../assets/images/portfolio/paper_generation-min.png";
import jbs from "../../assets/images/portfolio/jbs-it-institute-logo__1__720.png";
import jbsTech from "../../assets/images/portfolio/jbs-technology-logo_720.png";
import paperlogo from "../../assets/images/portfolio/untitled-1_360.png";
import nectar from "../../assets/images/portfolio/nectar.webp";
import InstituteWebImg from '../../assets/images/portfolio/institute_web-min.jpg'
import InstituteAppImg from '../../assets/images/portfolio/institute_app-min.jpg'
import TechnologyImg from '../../assets/images/portfolio/technology_website (1).png'
import {useNavigate} from "react-router-dom";


const portfolioItems = [
    {
        id: 1,
        img: nectarImg,
        logo: nectarlogo,
        title: "Nectar",
        description:
            "Welcome to Nectar, your one-stop destination for all your grocery needs! We offer a convenient online platform where you can browse through a wide selection of fresh produce, pantry essentials, household items, and more, all from the comfort of your home. With seamless ordering and secure payment options, we strive to make your shopping experience effortless and enjoyable. Whether you're looking for everyday staples or specialty ingredients, we've got you covered. Say goodbye to long queues and heavy bags – shop with us and have your groceries delivered straight to your doorstep, saving you time and hassle!",
        buttonVariant: "outlined",
        technologies: ["HTML","CSS","JavaScript","ReactJs","NodeJs"],
        buttonColor: "#fff",
        buttonBorder: "white",
        buttonBackground: "#fff",
        backgroundColor: "rgb(85,191,119)",
        sectionTextColor: "white",
        images: [{nectarImg}, {nectar}],
    },
    {
        id: 2,
        img: InstituteWebImg,
        logo: jbs,
        title: "Institute Website",
        description:
            "Welcome to JBS IT Institute, where knowledge meets innovation. Our website serves as a comprehensive hub for aspiring IT professionals, offering a diverse range of courses, hands-on training, and industry-relevant certifications. With state-of-the-art facilities and experienced instructors, JBS IT Institute is committed to providing students with the skills and expertise needed to thrive in today's rapidly evolving tech landscape. Explore our website to discover how we can help you embark on a successful career in IT.",
        buttonVariant: "outlined",
        technologies: ["HTML","CSS","JavaScript","ReactJs","NodeJs", "MUI"],
        buttonColor: "#141C25",
        buttonBorder: "#141C25",
        buttonBackground: "#141C25",
        backgroundColor: "#fff",
        sectionTextColor: "#3E3E3E",
    },
    {
        id: 3,
        img: project1,
        logo: stocklogo,
        title: "Hedger Community",
        description:
            "Hedger, our cutting-edge stock market website, revolutionizes the way users engage with financial markets. With real-time data, robust analysis tools, and a user-friendly interface, Hedger empowers investors of all levels to make informed decisions and manage their portfolios effectively. Whether it's tracking market trends, conducting research, or executing trades, Hedger provides a seamless and intuitive experience, making it the go-to platform for anyone looking to navigate the complexities of the stock market.",
        buttonVariant: "outlined",
        technologies: ["Flutter", "NodeJs"],
        buttonColor: "#fff",
        buttonBorder: "white",
        buttonBackground: "#fff",
        backgroundColor: "#141C25",
        sectionTextColor: "white",
    },
    {
        id: 4,
        img: project2,
        logo: paperlogo,
        title: "Paper Generator",
        description:
            "Our Flutter Paper Generation Application revolutionizes the creation of examination papers with its intuitive interface, customizable options, and seamless integration with question banks. Offering features such as randomization and export capabilities, it ensures efficient and secure paper generation for educators and institutions. With a focus on usability and functionality, our application empowers users to streamline the examination process and uphold the integrity of assessments.",
        buttonVariant: "outlined",
        technologies: ["Flutter","NodeJs"],
        buttonColor: "#141C25",
        buttonBorder: "#141C25",
        buttonBackground: "#141C25",
        backgroundColor: "#fff",
        sectionTextColor: "#3E3E3E",
    },
    {
        id: 5,
        img: TechnologyImg,
        logo: jbsTech,
        title: "Technology website",
        description:
            "Functioning as a dynamic portal to state-of-the-art technological solutions and services, our IT company website seamlessly integrates innovation with user-centric design. Providing visitors with insights into our expertise across a spectrum of IT domains, from customized software development to agile consulting services, our platform underscores our dedication to excellence and client fulfillment. With user-friendly navigation and compelling content, we encourage exploration of our digital ecosystem, enabling businesses to envision how we can propel their success into the digital frontier.",
        buttonVariant: "outlined",
        technologies: ["HTML","CSS","JavaScript","ReactJs","NodeJs"],
        buttonColor: "#e5e5e5",
        buttonBorder: "#dcdcdc",
        buttonBackground: "#e8e8e8",
        backgroundColor: "#556B2F",
        sectionTextColor: "#e7e7e7",
    },
    {
        id: 6,
        img: InstituteAppImg,
        logo: jbs,
        title: "Institute Application",
        description:
            "Our IT institute application offers a comprehensive platform for students to engage in interactive learning experiences. Packed with robust features, it provides access to diverse courses, real-time progress tracking, interactive quizzes, and a supportive community for collaborative learning. With user-friendly navigation and personalized learning paths, our application empowers students to excel in their IT journey with ease and efficiency.",
        buttonVariant: "outlined",
        technologies: ["Flutter","NodeJs"],
        buttonColor: "#141C25",
        buttonBorder: "#141C25",
        buttonBackground: "#141C25",
        backgroundColor: "#fff",
        sectionTextColor: "#3E3E3E",
    },
];
const Portfolio = () => {
    const theme = useTheme();
    const navigate = useNavigate()
    return (
        <>
            <Box bgcolor={theme.palette.backgroundLiteGrey} sx={{mt: "40px"}}>
                <Box
                    sx={{width: "100%"}}
                    px={{xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem"}}
                >
                    <Grid>
                        <Grid item lg={9} xs={11} sx={{py: {xs: 8, md: 13}}}>
                            <Box
                                className="heading"
                                sx={{fontSize: {md: "48px", xs: "32px"}}}
                            >
                                <Typography variant="div" fontWeight="bold">
                                    We take digital experience to the <br/>
                                    <Typography variant="span"
                                                color={theme.palette.primary.main}>
                                        next level
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box className="service_paragraph"
                                 sx={{my: "15px"}}>
                                <Typography>
                                    The products we build are changing the way
                                    industry leaders do
                                    their core business
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            {portfolioItems?.map((item, index) => (
                <Box
                    key={item.id}
                    bgcolor={item.backgroundColor}
                    color={item.sectionTextColor}
                >
                    <Container maxWidth="lg">
                        <Box sx={{py: "35px"}}>
                            <Grid container alignItems="center" spacing={5}>
                                {index % 2 === 0 && (
                                    <Grid
                                        item
                                        sx={{order: {md: 0}}}
                                        xs={12}
                                        md={6}
                                        display={"flex"}
                                        justifyContent={"center"}
                                    >
                                        <Box
                                            sx={{
                                                overflow: "hidden",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: {sm: "65%", md: "100%"},
                                            }}
                                        >
                                            <img src={item.img}
                                                 alt={item.title}/>
                                        </Box>
                                    </Grid>
                                )}
                                <Grid item xs={12} md={6}
                                      sx={{order: {md: 0, xs: 1}}}>
                                    <Box sx={{
                                        width: {
                                            md: "270px",
                                            xs: "200px"
                                        }
                                    }}>
                                        <img src={item.logo} alt="logo"/>
                                    </Box>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontSize: {md: "42px", xs: "32px"},
                                            fontWeight: "600",
                                            marginTop: "15px",
                                            letterSpacing: "1.2px",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mt: "20px",
                                            lineHeight: "1.7",
                                            letterSpacing: "0.9px",
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                    <Button
                                        variant={item.buttonVariant}
                                        sx={{
                                            mt: 3,
                                            mb: 5,
                                            borderRadius: "30px",
                                            fontWeight: "600",
                                            padding: "16px 58px",
                                            borderColor: item.buttonBorder,
                                            color: item.buttonColor,
                                            backgroundColor: item.backgroundColor,
                                            "&:hover": {
                                                backgroundColor: item.buttonBackground,
                                                borderColor: item.buttonBorder,
                                                color: item.backgroundColor,
                                            },
                                        }}
                                        onClick={() =>
                                            navigate(`/portfolio/single-project/${item.id}`)
                                        }
                                    >
                                        View more
                                    </Button>
                                </Grid>
                                {index % 2 !== 0 && (
                                    <Grid
                                        item
                                        sx={{order: {md: 0}}}
                                        xs={12}
                                        md={6}
                                        display={"flex"}
                                        justifyContent={"center"}
                                    >
                                        <Box
                                            sx={{
                                                overflow: "hidden",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: {sm: "65%", md: "100%"},
                                            }}
                                        >
                                            <img src={item.img}
                                                 alt={item.title}/>
                                        </Box>
                                    </Grid>
                                )}
                            </Grid>
                        </Box>
                    </Container>
                </Box>
            ))}
        </>
    );
};

export {portfolioItems};
export default Portfolio;
