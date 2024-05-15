import { Box, Button, Input, VStack } from "@chakra-ui/react";

function Register() {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="teal">Register</Button>
      </VStack>
    </Box>
  );
}

export default Register;
