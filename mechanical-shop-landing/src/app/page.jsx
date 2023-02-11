"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Rellax from "rellax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import {
  Box,
  Text,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Card,
  CardHeader,
  CardBody,
  HStack,
  List,
  ListItem,
  TagLeftIcon,
  ListIcon
} from "@chakra-ui/react";

import { CheckCircleIcon } from '@chakra-ui/icons';

const inter = Inter({ subsets: ["latin"] });


const initAnimat = ({inView,animationText1,animationText2}) => {

  if(inView){
    animationText1.start({
    x : 1,
    transition : {
      duration : 1,
      delay : 0.2,
      type:"tween"  
    }
   });

   /*
   animationText2.start({
    x : 1,
    transition : {
      duration : 1,
      delay : 0.2,
      type:"tween"
    }
   });
   */
  }else{
    
    console.log("not in view!!" + animationText1);
    
   
    
    animationText1.start({
      x:"100vw"
    });
    

  }

}

const LeftHero = () => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  const animationText1 = useAnimation();
  const animationText2 = useAnimation();

  useEffect(()=>{
    if(inView){
      animationText1.start({
      x : 1,
      transition : {
        duration : 1,
        delay : 0.2,
        type:"tween"  
      }
     });

     animationText2.start({
      x : 1,
      transition : {
        duration : 1,
        delay : 0.2,
        type:"tween"
      }
     });

    }else{
      animationText1.start({
        x:1000
      });

      animationText2.start({
        x:-1000
      });
    }
    //animationText1!=="undefined" && animationText2!=="undefined" ? initAnimat(inView,animationText1,animationText2) : null;
  },[inView]);

 

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
      mx="auto"
      overflow="hidden"
    >
      <Stack direction={{ base: "column", md: "row" }}
       ref ={ref}
      >
        <Stack flex={1} p={10} spacing={6}>
          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
          > 
            <motion.div
               animate={animationText1}
            >
              <Text
                as="span"
                display="block"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                Get Your Vehicle Running Like New
              </Text>
            </motion.div>

            <motion.div
              animate={animationText2}
            >

            <Text
              as="span"
              display="block"
              color={useColorModeValue("green.300", "white")}
            >
              Chakra UI
            </Text>
              </motion.div>
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
      bg={useColorModeValue("gray.100", "gray.800")}
      rounded={{ sm: "lg" }}
      overflow="hidden"
    >
      <CardBody

        bg={useColorModeValue("gray.100", "gray.800")}

      >
        <Box

          bg={useColorModeValue("gray.100", "gray.900")}

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
      justifyContent="center"
      overflow="hidden"
    >
      <CardHeader
        bg={useColorModeValue("white", "gray.800")}
        justifyContent="center"
        w="full"
        m="auto"
      >
        <Image
          src="thirteen.svg"
          alt="Picture of the author"
          width={50}
          height={50}
        >
        </Image>
      </CardHeader>

      <CardBody
        bg={useColorModeValue("white", "gray.800")}
        p={6}

      >
        <Text
          bg={useColorModeValue("white", "gray.800")}
          fontSize={{ base: "md", lg: "lg" }}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </CardBody>
    </Card >
  );
}

const Services = () => {

  return (
    <>
      <HStack
        spacing={3}
        align="center"
        mx="1rem"
        m={10}
        mr="20rem"
        justifyContent="center"
        className=".rellax1"
      >
        <Service />
        <Service />
        <Service />
      </HStack>
    </>
  );
}

export default function Home() {

  const rellax = new Rellax(".rellax", {
    speed: -2,
    round: true,
    vertical: true,
    horizontal: false
  });

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  const animation = useAnimation();


  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 1,
          type:"tween"

        }
      });
    } else {
      console.log("not in vew!!!")
      animation.start({
        x: 1000
      })
    }
  }
    , [inView]);







  return (
    <Flex direction="column" align="center" justify="center"
    >
      <Flex justifyContent={"center"}
        w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
        bg={useColorModeValue("white", "gray.800")}
        rounded={{ sm: "lg" }}
        overflow="hidden"
      >
        <LeftHero></LeftHero>
      </Flex>
      <Services />
      <List_Items reff={ref} animation={animation} />
    </Flex>
  );
}


const List_Items = ({ reff, animation }) => {
  return (
    <Flex
      width="full"
      bg={useColorModeValue("gray.100", "gray.700")}
      justifyContent="center"
      alignItems="center"
      gap={3}
      p={10}
      ref={reff}
    >
      <motion.div
        animate={animation}
      >
        <List justifyContent="center" shadow="lg">

          <List_Item title="24/7 Online Support" />

          <List_Item title="Expert Team" />

          <List_Item title="Pure Equipment" />

          <List_Item title="Unlimited Product" />
        </List>
      </motion.div>

      <motion.div
        animate={animation}
      >
        <ContactForm

        />
      </motion.div>
    </Flex>
  );
}

const List_Item = ({ title }) => {

  return (
    <ListItem
      bg={useColorModeValue("gray.100", "gray.700")}
      p={3}
    >
      <Flex
        bg={useColorModeValue("gray.100", "gray.700")}
        align="center"
      >
        <ListIcon as={CheckCircleIcon} color="green.500" />
        <Text fontSize="sm" fontWeight="bold">{title}</Text>
      </Flex>
    </ListItem>
  );

}
