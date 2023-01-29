import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { Mulish } from "@next/font/google";

const mulish = Mulish({
  weight: ["200", "400", "500", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <>
        <style jsx global>{`
          html {
            font-family: ${mulish.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </>
    </ChakraProvider>
  );
}
