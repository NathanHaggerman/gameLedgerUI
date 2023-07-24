import SideBar from "./components/SideBar";
import "./App.css";
import { useState } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import HomePage from "./components/HomePage";

export const App = () => {
  //TODO: setup authentication
  const [loggedIn, setLoggedIn] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Home");

  const testVideoGames = [
    { title: "The Witcher 3: Wild Hunt" },
    { title: "Red Dead Redemption 2" },
    { title: "The Legend of Zelda: Breath of the Wild" },
    { title: "Final Fantasy VII Remake" },
    { title: "Cyberpunk 2077" },
    { title: "Super Mario Odyssey" },
    { title: "Assassin's Creed Valhalla" },
    { title: "God of War" },
    { title: "Horizon Zero Dawn" },
  ];

  return (
    <ChakraProvider theme={theme}>
      <div className="app-container">
        {loggedIn && (
          <div className="sidebar">
            <SideBar
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
        )}

        <div className="page-content">
          {selectedItem === "Home" && (
            <HomePage loggedIn={loggedIn} videoGames={testVideoGames} />
          )}
          {/* {selectedItem === "Sort by score" && <SortByScorePage />}
        {selectedItem === "Recommendations" && <RecommendationsPage />}
        {selectedItem === "Tracked" && <TrackedPage />}
        {selectedItem === "Settings" && <SettingsPage />} */}
        </div>
      </div>
    </ChakraProvider>
  );
};
