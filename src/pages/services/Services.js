import React from "react";
import ServiceHead from "./ServicesHead";
import { Box } from "@mui/material";
import ServicesProduct from "./ServicesProduct";
import { useTheme } from "@emotion/react";
import { Counter } from "../../components/global/Counter";
import MileStone from "../Home/MileStone";
import ServicesIndia from "./ServiceIndia";
import OurCourse from "./OurCourse";
export const Services = () => {
  const theme = useTheme();
  return (
      <>
        <Box bgcolor={theme.palette.backgroundLiteGrey}>
          <Box mt={"40px"}>
            <ServiceHead />
          </Box>
          <Box bgcolor="white">
            {/*<Counter />*/}
            <MileStone />
          </Box>
          <Box mt={"40px"}>
            <ServicesIndia/>
          </Box>
          <Box mt={"40px"}>
            <OurCourse/>
          </Box>
          <Box mt={"40px"}>
            <ServicesProduct />
          </Box>
        </Box>
      </>
  );
};
