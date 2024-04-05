import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
export const TitleAnimation = ({ title }) => {
  const theme = useTheme();
  return (
    <>
      <Box align="center">
        <Box sx={{ fontSize: "35px", fontWeight: "600" }}>{title}</Box>
        <Box sx={{ marginTop: "10px" }}>
          <Box
            sx={{
              height: "3px",
              width: "100px",
              backgroundColor: "#B3DBFF",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                height: "13px",
                width: "13px",
                borderRadius: "50%",
                position: "absolute",
                top: "50%",
                left: "0%",
                transform: "translateY(-50%)",
                animation: "run 2s infinite linear alternate-reverse",
              }}
              bgcolor={theme.palette.primary.main}
            ></Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
