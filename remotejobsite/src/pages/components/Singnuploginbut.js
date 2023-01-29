import React from "react";
import PropTypes from "prop-types";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaLightbulb } from "react-icons/fa";

function Singnuploginbut(props) {
  const { toggleColorMode } = useColorMode();
  return (
    <Box className="flex space-x-2 justify-end ml-auto">
      <Button onClick={toggleColorMode}>
        <HiOutlineLightBulb />
      </Button>

      <Link href="/Login">
        <Box
          _hover={{ bg: "red.300" }}
          as="button"
          borderRadius="md"
          bg="tomato"
          color="white"
          px={4}
          h={8}
          fontWeight={600}
        >
          Login
        </Box>
      </Link>
      <Link href="/Signup">
        <Box
          as="button"
          _hover={{ bg: "green.600" }}
          borderRadius="md"
          bg="green.500"
          fontWeight={600}
          color="white"
          px={4}
          h={8}
        >
          Signup
        </Box>
      </Link>
    </Box>
  );
}

Singnuploginbut.propTypes = {};

export default Singnuploginbut;
