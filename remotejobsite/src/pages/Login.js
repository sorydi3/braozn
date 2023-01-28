import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function Login(props) {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Flex className="justify-center align-center w-screen h-screen ">
      <Flex
        direction="column"
        background={bg}
        className="rounded-lg shadow-lg p-10 m-auto"
      >
        <Heading className="mb-3 mx-auto">Login</Heading>
        <Input
          placeholder="Username"
          rounded={5}
          variant="filled"
          className="mb-4"
          border={1}
          borderColor="gray.300"
        />
        <Input
          placeholder="Password"
          rounded={5}
          variant="filled"
          className="mb-4 "
          border={1}
          borderColor="gray.300"
        />
        <Button colorScheme={"facebook"} className="mb-6">
          Login
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  );
}

Login.propTypes = {};

export default Login;
