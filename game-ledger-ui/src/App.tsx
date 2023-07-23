import { ChakraProvider, theme } from "@chakra-ui/react";

import CallToAction from "./components/optionsMenu";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CallToAction></CallToAction>
  </ChakraProvider>
);
