import { Flex, Box, Text, useColorMode, Button } from "@chakra-ui/react";
import { MotionConfig } from "framer-motion";
import Image from "next/image";
import { HiOutlineLightBulb } from "react-icons/hi";
import NavItem from "./NavItem";
import Singnuploginbut from "./Singnuploginbut";

function NavBar() {
  return (
    <Flex
      p={4}
      align="center"
      shadow="lg"
      className="shadow-lg fixed w-full z-10 top-0 left-0 right-0 backdrop-filter backdrop-blur-sm"
    >
      <Image src="/netflix-logo.png" width={50} height={50} alt="" />

      <NavItem />

      <Singnuploginbut />
    </Flex>
  );
}

export default NavBar;
