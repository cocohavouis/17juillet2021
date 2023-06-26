import { Box, Flex, Heading } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <Heading size="md">Mimzino App</Heading>
      </Box>
    </Flex>
  );
}

export default Navbar;
