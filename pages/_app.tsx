import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#fefefe',
        color: '#484848',
        fontFamily: 'Noto Sans JP',
        fontWeight: '400'
      }
    },
  },
  fonts: {
    heading: "Ubuntu",
    body: "Noto Sans JP",
  },
  colors: {
    brand: {
      primary: "#484848",
      secondary: "#ccc",
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
