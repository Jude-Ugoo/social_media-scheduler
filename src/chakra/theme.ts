import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

import { Button } from "./button";

// Call "extendTheme" and pass your custom values
export const theme = extendTheme({
  colors: {
    brands: {
      100: "#FF3C00",
    },
  },

  shadows: {
    gray: "rgba(0, 0, 0, 0.2) 0px 0px 30px -1px",
  },

  fonts: {
    body: "Open Sans, sans-serif",
  },

  styles: {
    global: () => ({
      body: {
        bg: "gray.200",
      },
    }),
  },

  components: {
    Button,
  },
});
