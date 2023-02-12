import React from "react";
import PropTypes from "prop-types";
import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

function Footer(props) {
  return (
    <>
      <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
        <Stack py={{ base: "12", md: "16" }}>
          <Stack justify="space-between" direction="row" align="center">
            <Text fontSize="sm" color="subtle">
              &copy; {new Date().getFullYear()} All rights reserved.
            </Text>
            <ButtonGroup variant="ghost" color="gray.600" ml="auto">
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.5rem" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.5rem" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.5rem" />}
              />
            </ButtonGroup>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

Footer.propTypes = {};

export default Footer;
