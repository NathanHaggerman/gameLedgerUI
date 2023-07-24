import CallToAction from "./components/HomePage";
import SideBar from "./components/SideBar";
import "./app.css";
import { useState } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import HomePage from "./components/HomePage";

export const App = () => {
  //TODO: setup authentication
  const [loggedIn, setLoggedIn] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Home");

  return (
    <ChakraProvider theme={theme}>
      {loggedIn && (
        <div className="sidebar">
          <SideBar
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
      )}

      {/* Show different information based on the selected item */}
      {selectedItem === "Home" && <HomePage />}
      {/* {selectedItem === 'Sort by score' && <SortByScorePage />}
      {selectedItem === 'Recommendations' && <RecommendationsPage />}
      {selectedItem === 'Tracked' && <TrackedPage />}
      {selectedItem === 'Settings' && <SettingsPage />} */}
    </ChakraProvider>
  );
};
