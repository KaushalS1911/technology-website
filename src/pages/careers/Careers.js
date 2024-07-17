import React from "react";
import { TitleAnimation } from "../../components/TitleAnimation";
import { Box, Container } from "@mui/material";
import { CareerCards } from "./CareerCards";
import { useTheme } from "@emotion/react";
import ApplyjobForm from "../../components/ApplyjobForm";

export const Careers = () => {
  const theme = useTheme();
  return (
    <>
      <Box bgcolor={theme.palette.backgroundLiteGrey}>
        <Box bgcolor={"white"} paddingY={9} my={"40px"}>
          <TitleAnimation title="Careers" />
        </Box>
        <Box mt={"40px"} pb={"80px"}>
          <CareerCards />
        </Box>
      </Box>
    </>
  );
};
