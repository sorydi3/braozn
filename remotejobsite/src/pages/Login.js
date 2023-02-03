import React from "react";

import { FaUserAlt, FaLock, FaFacebook, FaGoogle } from "react-icons/fa";
import { auth } from "@/config/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import Router from "next/router";

import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  TagLeftIcon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function Login(props) {
  const [user, setUser] = useAuthState(auth);
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("gray.100", "gray.900");

  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
  };

  const provider2 = new FacebookAuthProvider();
  const signInWithFacebook = async () => {
    await signInWithPopup(auth, provider2);
  };

  useEffect(() => {
    if (user) {
      console.log("user", user);
    } else {
      console.log("no user");
    }
  }, [user]);

  if (user) {
    Router.push("/");
  }

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
        <Button onClick={signInWithGoogle} mt="2.3rem">
          <TagLeftIcon as={FaGoogle} />
          Sign in with Google
        </Button>

        <Button onClick={signInWithFacebook} mt="2.1rem">
          <TagLeftIcon as={FaFacebook} />
          Sign in with facebook
        </Button>
      </Flex>
    </Flex>
  );
}

Login.propTypes = {};

export default Login;
