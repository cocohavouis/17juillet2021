import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const login = async () => {
    axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: username,
        password: password,
      })
      .then((response) => {
        // Handle success.
        localStorage.setItem("jwt", response.data.jwt); // Stocker le JWT pour l'utiliser plus tard

        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);

        navigate("/create-memorie");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });

    // const data = await response.data();
    // if (data.jwt) {
    //   localStorage.setItem("jwt", data.jwt); // Stocker le JWT pour l'utiliser plus tard
    //   console.log("Connexion réussie !");
    // } else {
    //   setError(data.message[0].messages[0].message); // Afficher l'erreur retournée par l'API Strapi
    // }
  };

  return (
    <Box
      bg="gray.50"
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        spacing={4}
        p={5}
        w="100%"
        maxW={"25rem"}
        background="white"
        boxShadow="lg"
        rounded="md"
      >
        <Text fontSize="3xl" fontWeight="semibold">
          Connexion
        </Text>

        <FormControl id="username">
          <FormLabel>Nom d'utilisateur</FormLabel>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            focusBorderColor="blue.500"
          />
        </FormControl>

        <FormControl id="password">
          <FormLabel>Mot de passe</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            focusBorderColor="blue.500"
          />
        </FormControl>

        <Button colorScheme="blue" w="100%" onClick={login}>
          Se connecter
        </Button>

        {error && <Text color="red.500">{error}</Text>}
      </VStack>
    </Box>
  );
}

export default Login;
