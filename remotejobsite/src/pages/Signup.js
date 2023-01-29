import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Heading,
  InputGroup,
  Input,
} from "@chakra-ui/react";

function Signup(props) {
  return (
    <>
      <Flex className="justify-center align-center w-screen h-screen ">
        <Flex direction="column" className="rounded-lg shadow-lg p-10 m-auto">
          <Heading className="mb-5 mx-auto">Signup</Heading>
          <InputGroup>
            <Input
              placeholder="username"
              rounded={5}
              variant="filled"
              className="mb-4"
              border={1}
              borderColor="gray.300"
            ></Input>
          </InputGroup>
          <InputGroup>
            <Input
              placeholder="email"
              rounded={5}
              variant="filled"
              className="mb-4"
              border={1}
              borderColor="gray.300"
            ></Input>
          </InputGroup>
          <InputGroup>
            <Input
              placeholder="password"
              rounded={5}
              variant="filled"
              className="mb-4"
              border={1}
              borderColor="gray.300"
            ></Input>
          </InputGroup>

          <InputGroup>
            <Input
              placeholder="confirm password"
              rounded={5}
              variant="filled"
              className="mb-4"
              border={1}
              borderColor="gray.300"
            ></Input>
          </InputGroup>
          <Button className="mx-auto" colorScheme="green">
            Signup
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

Signup.propTypes = {};

export default Signup;
