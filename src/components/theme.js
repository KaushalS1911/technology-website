import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
  palette: {
    black: {
      main: "#000",
    },
    primary: {
      main: "#0086FF",
    },
    gray: "rgba(0, 0, 0, 0.50)",
    litePrimary: "rgba(0,134,255,0.5)",
    greenBackground: "rgba(86,186,122,1)",
    liteGray: "rgba(250,250,250,1)",
    footerGray: "rgba(255,255,255,0.8)",
    darkGray: "rgba(62,62,62,1)",
    backgroundLiteGrey: "#FAFAFA",
    footerWhite: "rgba(255,255,255,1)",
    footerBlue: "#003361",
  },
});
export default theme;
