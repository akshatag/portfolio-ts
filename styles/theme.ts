import { extendTheme } from "@chakra-ui/react";
require('typeface-roboto-slab')


const theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: 'gray.900',
        }
      },
    },
    fonts: {
        body: "Roboto Slab",
        heading: "Roboto Slab",
        mono: "Roboto Slab",
      },
  })

export default theme;
