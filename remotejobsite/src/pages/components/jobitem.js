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
import { useColorModeValue } from "@chakra-ui/color-mode";

//accordeon item using chakra

function ApplyButton({ isExpanded }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="mx-auto"
    >
      <Flex
        mr={3}
        bg={useColorModeValue("gray.100", "gray.700")}
        hidden={isExpanded}
        className="md:flex rounded-lg shadow-md cursor-pointer"
      >
        <Text flexShrink={0} alignSelf="center " m={2}>
          Apply Now
        </Text>
      </Flex>
    </motion.div>
  );
}

function PlusMinusIcon({ isExpanded }) {
  return (
    <>
      {isExpanded ? (
        <AiOutlineMinus fontSize="20px" className="self-end" />
      ) : (
        <motion.div
          animate={{ rotate: !isExpanded ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <AiOutlinePlus fontSize="20px" className="ml-auto" />
        </motion.div>
      )}
    </>
  );
}

function JobDescription(props) {
  return (
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
  );
}

export default function JobItem(props) {
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
              {console.log("isExpanded", isExpanded)}
              <h2>
                <AccordionButton>
                  <HStack>
                    <Avatar>
                      <Image
                        src="/next.svg"
                        className="shrink-0 bg-cover bg-center rounded-xl"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </Avatar>
                    <JobDescription></JobDescription>
                  </HStack>
                  <ApplyButton isExpanded={isExpanded}></ApplyButton>
                  <PlusMinusIcon isExpanded={isExpanded}></PlusMinusIcon>
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

/*
 <AccordionButton>
                  <HStack>
                    <Avatar>
                      <Image
                        src="/next.svg"
                        className="shrink-0 bg-cover bg-center rounded-xl"
                        width={100}
                        height={100}
                        alt=""
                      />
                    </Avatar>
                    <JobDescription></JobDescription>
                  </HStack>

                  <ApplyButton isExpanded={isExpanded}></ApplyButton>

                  <PlusMinusIcon isExpanded={isExpanded}></PlusMinusIcon>
                </AccordionButton>
                */
