import { useState } from "react";
import { Container, VStack, Text, Button, Input, HStack, Box, useToast, Image } from "@chakra-ui/react";
import { FaUser, FaLock, FaSignInAlt, FaMoneyBillWave, FaGamepad } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [betColor, setBetColor] = useState("");
  const [wallet, setWallet] = useState(100); // Initial wallet balance
  const toast = useToast();

  const handleLogin = () => {
    // Dummy login logic
    if (mobileNumber === "1234567890" && password === "password") {
      setIsLoggedIn(true);
      toast({
        title: "Login successful.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Invalid credentials.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const handleBet = (color) => {
    // Dummy betting logic
    const betAmount = 10;
    if (wallet >= betAmount) {
      setWallet(wallet - betAmount);
      setBetColor(color);
      toast({
        title: `Bet placed on ${color}.`,
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Insufficient balance.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {!isLoggedIn ? (
        <VStack spacing={4}>
          <Text fontSize="2xl">Login to Color Prediction</Text>
          <HStack>
            <FaUser />
            <Input placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
          </HStack>
          <HStack>
            <FaLock />
            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </HStack>
          <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
            Login
          </Button>
        </VStack>
      ) : (
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to Color Prediction Game</Text>
          <Text>Wallet Balance: ₹{wallet}</Text>
          <HStack spacing={4}>
            <Button leftIcon={<FaMoneyBillWave />} colorScheme="red" onClick={() => handleBet("Red")}>
              Bet on Red
            </Button>
            <Button leftIcon={<FaMoneyBillWave />} colorScheme="green" onClick={() => handleBet("Green")}>
              Bet on Green
            </Button>
            <Button leftIcon={<FaMoneyBillWave />} colorScheme="purple" onClick={() => handleBet("Violet")}>
              Bet on Violet
            </Button>
          </HStack>
          {betColor && (
            <Box mt={4}>
              <Text>You have placed a bet on: {betColor}</Text>
            </Box>
          )}
          <Button leftIcon={<FaGamepad />} colorScheme="teal" onClick={() => setIsLoggedIn(false)}>
            Logout
          </Button>
        </VStack>
      )}
    </Container>
  );
};

export default Index;
