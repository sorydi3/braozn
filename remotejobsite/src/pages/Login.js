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
import { motion } from "framer-motion";

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
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { async } from "@firebase/util";

function InputField({ type, placeholder, icon }) {
  const [showPassword, setShowPassword] = useState(true);
  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={icon} />

        <Input
          placeholder={placeholder}
          type={type}
          rounded={5}
          variant="filled"
          className="mb-4"
          border={1}
          borderColor="gray.300"
        ></Input>
        {type === "password" && (
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </motion.div>
  );
}

function Login(props) {
  const [user, setUser] = useAuthState(auth);

  const bg = useColorModeValue("gray.100", "gray.900");

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
        <InputField type="text" placeholder="Email" icon={<FaUserAlt />} />
        <InputField type="password" placeholder="Password" icon={<FaLock />} />
        <Button colorScheme={"teal"} className="mb-6">
          Login
        </Button>
        <Button onClick={signInWithGoogle} mt="2.3rem">
          <TagLeftIcon as={FaGoogle} />
          Sign in with Google
        </Button>

        <Button onClick={signInWithFacebook} mt="0.5rem">
          <TagLeftIcon as={FaFacebook} />
          Sign in with facebook
        </Button>

        <Link href="/Signup" className="mt-3 self-center">
          <Text className="text-sky-600">Don't have an account? Sign up</Text>
        </Link>
      </Flex>
    </Flex>
  );
}

Login.propTypes = {};

export default Login;
