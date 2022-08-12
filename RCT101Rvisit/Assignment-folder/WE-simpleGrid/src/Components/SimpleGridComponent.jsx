import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

const SimpleGridComponent = () => {
  const items = new Array(15).fill(0).map((a, i) => i + 1);
  console.log(items);

  const breakpoints = {
    base: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  };
  return (
    <div>
      <h1>SimpleGrid</h1>
      <Box>
        <SimpleGrid w="80%" columns={breakpoints} m="auto" gap={6}>
          {items.map((elem) => (
            <Box h="40" bg="tomato" key={elem}>
              {elem}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default SimpleGridComponent;
