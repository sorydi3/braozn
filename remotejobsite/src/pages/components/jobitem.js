import Image from "next/image";
import useStore from "../storage/state";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Collapse } from "react-collapse";
import Jobdetail from "./jobdetail";
import { motion } from "framer-motion";
import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  Avatar,
  Flex,
  Text,
  HStack,
  Badge,
  Button,
} from "@chakra-ui/react";

//accordeon item using chakra

function JobItem(props) {
  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <AccordionItem
          className="my-5 rounded-lg shadow-lg"
          borderTopWidth={0}
          borderBottomColor="teal"
        >
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <HStack>
                    <Avatar>
                      <Image
                        src="/next.svg"
                        className="shrink-0 bg-cover bg-center rounded-xl"
                        width={100}
                        height={100}
                      />
                    </Avatar>

                    <Flex ml={4} flexDir="column" className="text-left">
                      <Box display="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                          New
                        </Badge>
                        <Box
                          color="gray.500"
                          fontWeight="semibold"
                          letterSpacing="wide"
                          fontSize="xs"
                          textTransform="uppercase"
                          ml="2"
                        >
                          1 vacancy &bull; 2d ago
                        </Box>
                        <Box fontSize="lg" ml="2">
                          1,900.00€
                          <Box as="span" color="gray.600" fontSize="sm">
                            / yr
                          </Box>
                        </Box>
                      </Box>
                      <Text fontWeight="bold" fontSize="xl">
                        Javascript Developer
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        Girona
                      </Text>
                    </Flex>
                  </HStack>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="mx-auto"
                  >
                    <Button
                      colorScheme="teal"
                      mr={3}
                      hidden={isExpanded}
                      className="md:flex"
                    >
                      Apply Now
                    </Button>
                  </motion.button>

                  {isExpanded ? (
                    <AiOutlineMinus fontSize="20px" className="ml-auto" />
                  ) : (
                    <motion.div
                      animate={{ rotate: !isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <AiOutlinePlus fontSize="20px" className="ml-auto" />
                    </motion.div>
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Jobdetail></Jobdetail>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </motion.div>
    </>
  );
}

function JobItemm(pageProps) {
  const storage = useStore((state) => state.storage);
  const addData = useStore((state) => state.addData);
  const removeData = useStore((state) => state.removeData);
  const clearData = useStore((state) => state.clearData);

  return (
    <>
      <div
        className="w-full h-24 grid grid-cols-[2rem,1fr] rounded-xl gap-4 border-b-2 flex-shrink-0 hover:border-cyan-600"
        onClick={() => pageProps.toggle(!pageProps.open)}
      >
        <Image
          src="/next.svg"
          className="w-full h-full shrink-0 bg-cover bg-center rounded-xl"
          width={100}
          height={100}
        />
        <div className=" grid  grid-cols-2 shr  w-full h-full justify-center content-center justify-items-center text-cyan-700">
          <div className=" ">
            <h1 className="font-extrabold text-xs">
              {" "}
              {pageProps.title !== undefined ? pageProps.title : "Nothins yet"}
            </h1>
            <p className="font-thin text-xs">Girona</p>
          </div>
          <div className="font-semibold ml-auto text-xs">
            {pageProps.open ? <AiOutlineMinus /> : <AiOutlinePlus />}
            <p className="text-left ">€ 2k</p>
            <p className="">Remote</p>
          </div>
        </div>
        <Collapse isOpened={pageProps.open}>
          <Jobdetail></Jobdetail>
        </Collapse>
      </div>
    </>
  );
}

export default JobItem;

/*
<motion.div
  whileHover={{ scale: 1.2, rotate: 90 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
/>
*/
