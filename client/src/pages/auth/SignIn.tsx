import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";

import { FormEvent } from "react";
import { useUserStore } from "../../store/userStore";

type SignInProps = {};

const SignIn: React.FC<SignInProps> = () => {
  const navigate = useNavigate();
  const { user, fetchUser } = useUserStore();

  console.log("user is:", user);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  // useEffect(() => {
  //   console.log("Updated user is", user)
  // }, [user])

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: "",
    isSubmitting: false,
  });

  const validateForm = () => {
    if (!formData.email) {
      return "Please enter your email address.";
    }
    if (!formData.password) {
      return "Please enter a password.";
    }
    return "";
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const error = validateForm();
    setFormData((prevFormData) => ({ ...prevFormData, error }));
    console.log(formData);

    try {
      const { email, password } = formData;
      const res = await newRequest.post("/auth/login", { email, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/onboarding");
      console.log("user is", user);
    } catch (err) {
      error;
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setFormData({ ...formData, name: event.target.value });
    setFormData((prev) => ({
      ...prev,
      [event?.target.name]: event?.target.value,
    }));
  };

  return (
    <Container maxW="100vw" px="0">
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
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
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
                    <Text fontSize={"lg"} textAlign="center">
                      New User?
                      <Link to="/signup" color={"blue.400"}>
                        <Text as="span" pl={"2"} color="gray.500">
                          Sign Up
                        </Text>
                      </Link>
                    </Text>

                    <Button
                      bg={"green.500"}
                      color={"white"}
                      _hover={{
                        bg: "green.600",
                      }}
                      h="12"
                      type="submit"
                    >
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </form>
        </Box>

        <Box w="65%">
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
