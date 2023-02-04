import React from "react";
import { Button, HStack, Toast } from "@chakra-ui/react";
import Link from "next/link";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { motion } from "framer-motion";
import toaster, { Toaster } from "react-hot-toast";
import { auth } from "@/config/firebase";

function Item({ href, children }) {
  return (
    <Link
      href={href}
      _focus={{ boxShadow: "none" }}
      _active={{ boxShadow: "none" }}
      _hover={{
        textDecoration: "none",
        bg: "gray.100",
        color: useColorModeValue("gray.700", "gray.100"),
        borderRadius: "md",
      }}
    >
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button variant="ghost" _focus={{ boxShadow: "none" }}>
          {children}
        </Button>
      </motion.div>
    </Link>
  );
}

function NavItem(props) {
  return (
    <HStack mr="auto" as={"nav"} className=" space-x-5 ml-6 hidden md:flex ">
      <Item href="/">Home</Item>
      <Item href="/">About</Item>
      <Item href="/">Contact</Item>
      <Item href="/">Blog</Item>
    </HStack>
  );
}

NavItem.propTypes = {};

export default NavItem;
