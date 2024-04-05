import React from "react";
import ServiceHead from "./ServicesHead";
import { Box } from "@mui/material";
import ServicesProduct from "./ServicesProduct";
import { useTheme } from "@emotion/react";
import { Counter } from "../../components/global/Counter";
export const Services = () => {
  const theme = useTheme();
  return (
    <>
      <Box bgcolor={theme.palette.backgroundLiteGrey}>
        <Box mt={"40px"}>
          <ServiceHead />
        </Box>
        <Box bgcolor="white">
          <Counter />
        </Box>
        <Box mt={"40px"}>
          <ServicesProduct />
        </Box>
      </Box>
    </>
  );
};
