import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: `'Mulish', sans-serif`,
    body: `'Mulish', sans-serif`,
  },
  colors: {
    gray: {
      "900": "#181B23",
      "50": "#EEEEF2",
      "100": "#3B3E45"
    },
    black: "#000",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
  background: {
    background1: "linear-gradient(90deg, #FF2D04 0%, #C13216 100%)",
  },
});
