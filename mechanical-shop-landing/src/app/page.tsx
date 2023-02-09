"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Link,
  Box,
  Text,
  Stack,
  Button,
  Heading,
  Icon,
  useColorModeValue,
  chakra,
  VisuallyHidden,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
  useDisclosure,
  useColorMode,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,

} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

const LeftHero = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
      mx="auto"
      overflow="hidden"
    >
      <Stack direction={{ base: "column", md: "row" }}>
        <Stack flex={1} p={10} spacing={6}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
          >
            <Text
              as="span"
              display="block"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Get Your Vehicle Running Like New
            </Text>
            <Text
              as="span"
              display="block"
              color={useColorModeValue("green.300", "white")}
            >
              Chakra UI
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color={useColorModeValue("gray.500", "gray.400")}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
            <Button
              rounded="full"
              size="lg"
              fontWeight="normal"
              px={6}
              colorScheme="green"
              bg="green.400"
              _hover={{ bg: "green.500" }}
            >
              Get started
            </Button>
            <Button rounded="full" size="lg" fontWeight="normal" px={6}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

const ContactForm = () => {
  return (
    <Card
      bg={useColorModeValue("white", "gray.800")}
      w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
      rounded={{ sm: "lg" }}
      overflow="hidden"
    >
      <CardBody p={32}

        bg={useColorModeValue("white", "gray.800")}


      >
        <Box

          bg={useColorModeValue("gray.100", "gray.900")}
          p={8}
          shadow="base"
          rounded={3}
        >

          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email"
              borderColor={useColorModeValue("gray.400", "gray.200")}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl id="number" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input type="number"
              borderColor={useColorModeValue("gray.400", "gray.200")}
            />
            <FormHelperText>We'll never share your phone number.</FormHelperText>
          </FormControl>

          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Input type="text" height={10}
              borderColor={useColorModeValue("gray.400", "gray.200")}
            />
            <FormHelperText>We'll never share your message.</FormHelperText>
          </FormControl>
        </Box>

        <Button
          mt={10}
          w={'full'}
          bg={'green.400'}
          color={'white'}
          rounded={'xl'}
          boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
          _hover={{
            bg: 'green.500',
          }}
          _focus={{
            bg: 'green.500',
          }}>
          call us!!
        </Button>
      </CardBody>
    </Card>
  );
};

const Service = () => {

  return (
    <Card
      bg={useColorModeValue("white", "gray.800")}
      rounded={{ sm: "lg" }}
      overflow="hidden"
      w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
    >
      <CardHeader
        bg={useColorModeValue("white", "gray.800")}
        p={32}
      >
        <Heading
          bg={useColorModeValue("white", "gray.800")}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="shorter"
        >Service</Heading>
      </CardHeader>

      <CardBody
        bg={useColorModeValue("white", "gray.800")}
        p={32}

      >
        <Text
          bg={useColorModeValue("white", "gray.800")}
          fontSize={{ base: "md", lg: "lg" }}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </CardBody>

      <CardFooter
        bg={useColorModeValue("white", "gray.800")}
        p={32}
      >
      </CardFooter>
    </Card>
  );
}

const Services = () => {

  return (
    <>
      <Heading
        bg={useColorModeValue("white", "gray.800")}
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="extrabold"
        letterSpacing="tight"
        lineHeight="shorter"
      >
        Our Services
      </Heading>
      <HStack
        spacing={4}
        align="center"

      >
        <Service />
        <Service />
      </HStack>
    </>
  );
}

export default function Home() {
  return (
    <Flex direction="column" align="center" justify="center">
      <Flex justifyContent={"center"}
        w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
        h={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
        bg={useColorModeValue("white", "gray.800")}
        rounded={{ sm: "lg" }}
        overflow="hidden"
      >
        <LeftHero></LeftHero>
      </Flex>
      <Services />
    </Flex>
  );
}
