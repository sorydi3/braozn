import React from "react";
import PropTypes from "prop-types";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { motion } from "framer-motion";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Box,
  Label,
} from "@chakra-ui/react";
import FocusLock from "react-focus-lock";

const InputItem = ({ label, ...rest }) => (
  <FormControl>
    <FormLabel>{label}</FormLabel>
    <Input {...rest} />
  </FormControl>
);

const Apply = (props) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);
  return (
    <Popover
      isOpen={isOpen}
      initialFocusRef={firstFieldRef}
      onOpen={onOpen}
      onClose={onClose}
      placement="top"
      matchWidth={true}
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button colorScheme="teal" mt="2.5" ml="10rem">
            Apply Now
          </Button>
        </motion.button>
      </PopoverTrigger>
      <FocusLock disabled={!isOpen}>
        <PopoverContent>
          <PopoverCloseButton />
          <PopoverBody>
            <InputItem label="First Name" ref={firstFieldRef} />
            <InputItem label="Last Name" />
            <InputItem label="Email" type="email" />
            <InputItem label="Phone" />

            <InputGroup mt={9}>
              <FormLabel htmlFor="file-upload" mb="0">
                Upload Resume
              </FormLabel>
              <Input
                id="file-upload"
                type="file"
                placeholder="Upload Resume"
                aria-label="Upload Resume"
              />
            </InputGroup>

            <Box mt="2rem">
              <Button colorScheme="teal" mr="1rem">
                Submit
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                Cancel
              </Button>
            </Box>
          </PopoverBody>
        </PopoverContent>
      </FocusLock>
    </Popover>
  );
};

Apply.propTypes = {};

export default Apply;
