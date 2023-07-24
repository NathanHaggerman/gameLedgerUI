import React, { useEffect, useState } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";

interface Game {
  UserGameID: number;
  UserID: number;
  GameID: number;
  Status: string;
  Progress: number | null;
  DateAdded: string;
  GameTitle: string;
}

const GameCardList = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    //TODO: login
    const userID = 1;

    axios
      .get(`http://localhost:3000/usersGames/${userID}`)
      .then((response) => {
        console.log("daterss: ", response);
        setGames(response.data);
      })
      .catch((error) => {
        console.error("Error fetching games:", error);
      });
  }, []);

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
      {games.map((game) => (
        <Box
          key={game.GameTitle}
          p={6}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          width="50%"
        >
          {game.GameTitle}
          {game.Status}
          {game.Progress}
          {game.DateAdded}
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameCardList;
