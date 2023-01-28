import { Flex, Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import NavBarItem from "./navbaritem";
import Image from "next/image";

function NavBar() {
  return (
    <Flex
      bg="gray.800"
      p={4}
      align="center"
      shadow="lg"
      className="shadow-lg fixed w-full z-10 top-0 left-0 right-0"
    >
      <Text fontWeight="bold" color="white">
        My App
      </Text>
      <Box mr="auto" className=" space-x-2 ml-6 ">
        <Link href="\" color="white" mr={6}>
          Home
        </Link>
        <Link href="\" color="white" mr={6}>
          About
        </Link>
        <Link href="\" color="white">
          Contact
        </Link>
      </Box>
    </Flex>
  );
}

export default NavBar;
