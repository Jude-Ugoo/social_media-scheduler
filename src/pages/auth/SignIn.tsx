import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

type SignInProps = {};

const SignIn: React.FC<SignInProps> = () => {
  return (
    <Container maxW="100vw" px="0">
      <Flex h="100vh">
        <Box
          w="35%"
          minH={"100vh"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Link to="/">
            {" "}
            <Heading as="h1" size={"lg"} pt={5} ml="10">
              ChronoPost
            </Heading>
          </Link>

          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"3xl"}>Sign in to your account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                to enjoy all of our cool{" "}
                <Link to="/features" color={"blue.400"}>
                  features
                </Link>{" "}
                ✌️
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" h="12" />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" h="12" />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link to="/forget-password" color={"blue.400"}>
                      Forgot password?
                    </Link>
                  </Stack>
                  <Button
                    bg={"green.500"}
                    color={"white"}
                    _hover={{
                      bg: "green.600",
                    }}
                    h='12'
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>

        <Box w="65%">
          {/* <Heading as="h2" size="xl">
            Introducing: A free micro-site by Buffer
          </Heading>

          <Text>
            A Start Page is a beautiful, flexible, mobile-friendly landing page
            that you can build in minutes and update in seconds
          </Text> */}

          <Image
            src="/images/login_img2.jpg"
            height="100%"
            width={"100%"}
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Container>
  );
};
export default SignIn;
