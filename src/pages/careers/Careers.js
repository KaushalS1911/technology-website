import React from "react";
import { TitleAnimation } from "../../components/TitleAnimation";
import { Box } from "@mui/material";
import { CareerCards } from "./CareerCards";
import { CareerCardData } from "./CareerCardData";
import { useTheme } from "@emotion/react";

export const Careers = () => {
  const theme = useTheme()
  return (
    <>
      <Box bgcolor={theme.palette.backgroundLiteGrey}>
        <Box bgcolor={"white"} paddingY={9} mt={"40px"}>
          <TitleAnimation title="Openings" />
        </Box>
        <Box mt={"40px"}>
          <CareerCards />
        </Box>
        
      </Box>
    </>
  );
};
