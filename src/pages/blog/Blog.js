import React from "react";
import { TitleAnimation } from "../../components/TitleAnimation";
import { Box, Container } from "@mui/material";
import { CareerCards } from "../careers/CareerCards";
import { useTheme } from "@emotion/react";
import {BlogCard} from "./BlogCard";
import { Grid, Typography, Button } from '@mui/material';


export const Blog = () => {
    const theme = useTheme();
    return (
        <>
            <Box bgcolor={theme.palette.backgroundLiteGrey}>
                <Box bgcolor={"white"} paddingY={9} my={"40px"}>
                    <TitleAnimation title="Blog" />
                </Box>
                <Box mt={"40px"} pb={"80px"}>
                    <BlogCard/>
                </Box>
            </Box>
        </>
    );
};
