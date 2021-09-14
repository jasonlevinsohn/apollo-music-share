import { createTheme } from "@material-ui/core/styles";
import { teal, purple, blue } from "@material-ui/core/colors";

export const lightTheme = createTheme({
  palette: {
    primary: teal,
    secondary: purple,
    text: blue,
  },
});

export const darkTheme = createTheme({
  type: "dark",
  palette: {
    primary: blue,
    secondary: blue,
  },
});
