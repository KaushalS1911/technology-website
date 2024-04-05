import React from "react";
import ServiceHead from "./ServicesHead";
import { ServicesCounter } from "./ServicesCounter";
import { Box } from "@mui/material";
import ServicesProduct from "./ServicesProduct";
import { useTheme } from "@emotion/react";
export const Services = () => {
  const theme = useTheme()
  return (
    <>
      <Box bgcolor={theme.palette.backgroundLiteGrey}>
        <Box mt={"40px"} >
          <ServiceHead />
        </Box>
        <Box bgcolor="white">
          <ServicesCounter />
        </Box>
        <Box mt={"40px"}>
          <ServicesProduct />
        </Box>
      </Box>
    </>
  );
};
