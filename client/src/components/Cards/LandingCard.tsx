import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

type LandingCardProps = {};

const LandingCard: React.FC<LandingCardProps> = () => {
  return (
    <Flex
      pt={"20"}
      pr="10"
      direction={"column"}
      align="center"
    >
      <Image
        src="/images/avatar.png"
        h={"100px"}
        w="100px"
        objectFit={"cover"}
        borderRadius="50%"
        // zIndex={"1"}
        mb="-10"
        position={'relative'}
      />

      <Card
        boxShadow="2xl"
        align={"center"}
        bg="whitesmoke"
        w="350px"
      >
        <CardBody textAlign={"center"} justifyContent="center">
          <Stack mt="6" spacing="3">
            <Text mt={"10"} mb="10">
              Buffer makes it easy for us to monitor all of our engagement and
              strengthen the connection with our audience.
            </Text>

            <Text as={"p"} color="gray.400">
              DressUp
            </Text>
          </Stack>
        </CardBody>

        <CardFooter>Rodrigo Hyago, Social Media Content Manager</CardFooter>
      </Card>
    </Flex>
  );
};
export default LandingCard;
