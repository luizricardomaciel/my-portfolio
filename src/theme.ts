import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
    },
    secondary: {
      main: "#004aad",
    },
  },
  typography: {
    fontFamily: "helvetica Neue",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
