import { ChakraProvider, theme } from "@chakra-ui/react";

import CallToAction from "./components/CallToAction";
import SideBar from "./components/SideBar";
import "./app.css";

export const App = () => (
  <ChakraProvider theme={theme}>
    <CallToAction></CallToAction>
    <div className="sidebar">
      <SideBar></SideBar>
    </div>
  </ChakraProvider>
);
