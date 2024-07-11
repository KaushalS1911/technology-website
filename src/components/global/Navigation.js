import React, {useEffect, useState} from "react";
import {
    Box,
    Container,
    Link,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useMediaQuery} from "@mui/material";
import logo from '../../assets/images/Header/JBS-technology-logo-2 1.png'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import {NavLink} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
    {text: "Home", path: "/"},
    {text: "About", path: "/about"},
    {text: "Portfolio", path: "/portfolio"},
    {text: "Services", path: "/service"},
    {text: "Careers", path: "/careers"},
    {text: "Contact Us", path: "/contact"},
];

const Navigation = () => {
    const isMobile = useMediaQuery("(max-width:900px)");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const {contextSafe} = useGSAP();
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    useEffect(function contextSafe() {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top+=50 top",
                end: "top top",
                toggleActions: "play none none reverse",
            },
        })
            .to('.nav', {
                background: "rgba( 255, 255, 255, 1 )",
                duration: 0.5
            })
            .to('.nav', {width: isMobile ? "88%" :  "60%",borderRadius: "20px",marginTop: "20px",padding: "0"},"nav")
            // .to('.navLogo',{height:"10%"},"nav")
    }, []);

    return (
        <Box sx={{display: "flex",justifyContent: "center"}}>
            <Box
                className={"nav"}
                sx={{
                    background: "rgba( 255, 255, 255, 0.45 )",
                    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.15 )",
                    backdropFilter: "blur( 5.5px )",
                    border: "1px solid rgba( 255, 255, 255, 0.18 )",
                    padding: "10px 0",
                    position: "fixed",
                    width: "100%",
                    zIndex: "200"
                }}
            >
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 0,
                        }}
                    >
                        <Box className={"navLogo"} sx={{height: "70px"}}>
                            <img src={logo} alt="Logo" style={{height: "100%",width: "100%"}}/>
                        </Box>
                        {isMobile ? (
                            <>
                                <IconButton onClick={toggleDrawer}>
                                    <MenuIcon/>
                                </IconButton>
                                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                                    <List sx={{width: 250}}>
                                        {menuItems.map((item, index) => (
                                            <ListItem button key={index} onClick={toggleDrawer}>
                                                <NavLink
                                                    to={item.path}
                                                    sx={{
                                                        textDecoration: "none",
                                                        width: "100%",
                                                    }}
                                                >
                                                    <ListItemText primary={item.text} />
                                                </NavLink>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Drawer>
                            </>
                        ) : (
                            <List sx={{display: "flex", gap: {xs:1 , md:1 ,lg:2}, margin: 0, padding: 0,'& li ': {paddingRight: "0",paddingLeft: "10px"}}}>
                                {menuItems.map((item, index) => (
                                    <ListItem key={index} sx={{width: "auto", cursor: "pointer",'& a ': {color: "black !important"}}}>
                                        <NavLink
                                            to={item.path}
                                            sx={{
                                                textDecoration: "none",
                                            }}
                                        >
                                            <ListItemText
                                                primary={item.text}
                                                sx={{"& > span": {fontWeight: "500 !important"}}}
                                            />
                                        </NavLink>
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Navigation;
