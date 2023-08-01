import {
  Container,
  Flex,
  useColorModeValue,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Box,
  Image,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";

import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import newRequest from "../../utils/newRequest";

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    error: "",
    isSubmitting: false,
  });

  const validateForm = () => {
    if (!formData.name) {
      return "Please enter your Name";
    }
    if (!formData.email) {
      return "Please enter your email address.";
    }
    if (!formData.password) {
      return "Please enter a password.";
    }
    if (formData.password !== formData.confirmPassword) {
      return "Passwords do not match.";
    }
    return "";
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const error = validateForm();
    // setFormData({ ...formData, error });
    setFormData((prevFormData) => ({ ...prevFormData, error }));
    console.log(formData);

    try {
      const { name, username, email, password, confirmPassword } = formData;
      const res = await newRequest.post("/auth/register", {
        name,
        email,
        username,
        password,
        confirmPassword,
      });
      navigate("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setFormData({ ...formData, name: event.target.value });
    setFormData((prev) => ({
      ...prev,
      [event?.target.name]: event?.target.value,
    }));
    console.log();
  };

  return (
    <div>
      <Container maxW="100vw" px="0" minH={"100vh"}>
        <Flex h="100vh">
          <Box
            w="35%"
            minH={"100vh"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <form onSubmit={handleSubmit}>
              <Link to="/">
                {" "}
                <Heading as="h1" size={"lg"} pt={5} ml="10">
                  ChronoPost
                </Heading>
              </Link>

              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <Heading fontSize={"3xl"}>Create a free account</Heading>
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
                    <FormControl id="name" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        h="12"
                        name="name"
                        value={formData.name}
                        onChange={onChange}
                      />
                    </FormControl>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input
                        type="email"
                        value={formData.email}
                        name="email"
                        onChange={onChange}
                        h="12"
                        errorBorderColor="red.300"
                      />
                      <FormErrorMessage>{formData.error}</FormErrorMessage>
                    </FormControl>
                    <FormControl id="username">
                      <FormLabel>Username</FormLabel>
                      <Input
                        type="text"
                        value={formData.username}
                        name="username"
                        onChange={onChange}
                        h="12"
                        errorBorderColor="red.300"
                      />
                      <FormErrorMessage>{formData.error}</FormErrorMessage>
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={onChange}
                        h="12"
                        errorBorderColor="red.300"
                      />
                      <FormErrorMessage>{formData.error}</FormErrorMessage>
                    </FormControl>
                    <FormControl id="confirmPassword" isRequired>
                      <FormLabel>Confirm Password</FormLabel>
                      <Input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={onChange}
                        h="12"
                        errorBorderColor="red.300"
                      />
                      <FormErrorMessage>{formData.error}</FormErrorMessage>
                    </FormControl>
                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                      >
                        <Checkbox>Remember me</Checkbox>

                        <Link to="/signin" color={"blue.400"}>
                          Sign in
                        </Link>
                      </Stack>
                      <Button
                        bg={"green.500"}
                        color={"white"}
                        _hover={{
                          bg: "green.600",
                        }}
                        h="12"
                        type="submit"
                      >
                        Sign up
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </form>
          </Box>

          <Box w="65%">
            <Image
              src="/images/signup_img2.jpg"
              height="100%"
              width={"100%"}
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Container>
    </div>
  );
};
export default SignUp;
