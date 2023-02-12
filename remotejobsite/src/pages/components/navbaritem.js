import { Flex } from "@chakra-ui/react";

function NavBarItem({ name, focused }) {
  return (
    <Flex
      className={
        focused
          ? "flex p-3 rounded-full  bg-cyan-700 text-white font-semibold"
          : "flex m-auto p-3 rounded-full bg-cyan-50 hover:bg-cyan-700 hover:text-white hover:font-semibold"
      }
    >
      {name}
    </Flex>
  );
}

export default NavBarItem;
