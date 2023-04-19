import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

type SignInProps = {};

const SignIn: React.FC<SignInProps> = () => {
  return (
    <Container maxW="100vw" px="0">
      <Flex h="100vh">
        <Box w="35%">
          right
        </Box>

        <Box w="65%">
          {/* <Heading as="h2" size="xl">
            Introducing: A free micro-site by Buffer
          </Heading>

          <Text>
            A Start Page is a beautiful, flexible, mobile-friendly landing page
            that you can build in minutes and update in seconds
          </Text> */}

          <Image src="/images/login_img2.jpg" height="100%" width={"100%"} objectFit='cover' />
        </Box>
      </Flex>
    </Container>
  );
};
export default SignIn;
