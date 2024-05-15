import { Link } from "react-router-dom";
import { Box, HStack, Button } from "@chakra-ui/react";

function Navigation() {
  return (
    <Box bg="gray.100" p={4}>
      <HStack spacing={4}>
        <Button as={Link} to="/" colorScheme="teal">
          Home
        </Button>
        <Button as={Link} to="/register" colorScheme="teal">
          Register
        </Button>
      </HStack>
    </Box>
  );
}

export default Navigation;
