import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

interface GameCardListProps {
  games: { title: string }[];
}

const GameCardList: React.FC<GameCardListProps> = ({ games }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
      {games.map((game) => (
        <Box
          key={game.title}
          p={6}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          width="50%"
        >
          {game.title}
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameCardList;
