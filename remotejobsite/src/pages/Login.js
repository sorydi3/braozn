import React from "react";
import PropTypes from "prop-types";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function Login(props) {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.100", "gray.900");

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex className="justify-center align-center w-screen h-screen ">
      <Flex
        direction="column"
        background={bg}
        className="rounded-lg shadow-lg p-10 m-auto"
      >
        <Heading className="mb-3 mx-auto">Login</Heading>

        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaUserAlt />} />
          <Input
            placeholder="Username"
            rounded={5}
            variant="filled"
            className="mb-4"
            border={1}
            borderColor="gray.300"
          ></Input>
        </InputGroup>

        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaLock />} />
          <Input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            rounded={5}
            variant="filled"
            className="mb-4 "
            border={1}
            borderColor="gray.300"
          />

          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button colorScheme={"teal"} className="mb-6">
          Login
        </Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  );
}

Login.propTypes = {};

export default Login;
