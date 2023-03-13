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
      "100": "#3B3E45",
    },
    black: "#000",
    white: {
      "50": "#FBFBFB",
      "100": "#FFF",
    },
    blue: "#0D99FF",
    yellow: "rgba(254, 206, 0, 1)",
    week: {
      monday: "#FF0024",
      tuesday: "#FF8000",
      wednesday: "#FFCE00",
      thursday: "#FE4B65",
      friday: "#FEA54B",
      saturday: "#FEDC4B",
      sunday: "#FD7E8F",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
  shadow: {
    black: "rgba(168, 168, 168, 0.25)",
  },
});
