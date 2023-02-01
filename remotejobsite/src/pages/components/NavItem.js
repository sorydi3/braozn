import React from "react";
import PropTypes from "prop-types";
import { Flex, Box, Text, useColorMode, Button } from "@chakra-ui/react";
import Link from "next/link";

function NavItem(props) {
  return (
    <Box mr="auto" className=" space-x-5 ml-6 hidden md:flex ">
      <Link href="" color="white" mr={6}>
        <Box
          fontWeight="bold"
          as="button"
          colorscheme="gray.50"
          _hover={{ background: "teal" }}
          rounded="lg"
          px={2}
          py={2}
        >
          <Text>Home</Text>
        </Box>
      </Link>
      <Link href="/" color="white" mr={6}>
        <Box
          fontWeight="bold"
          as="button"
          colorscheme="gray.900"
          _hover={{ background: "teal" }}
          rounded="lg"
          px={2}
          py={2}
        >
          <Text>About</Text>
        </Box>
      </Link>
      <Link href="/" color="white">
        <Box
          fontWeight="bold"
          as="button"
          colorscheme="gray.900"
          _hover={{ background: "teal" }}
          rounded="lg"
          px={2}
          py={2}
        >
          <Text>Contact</Text>
        </Box>
      </Link>
    </Box>
  );
}

NavItem.propTypes = {};

export default NavItem;
