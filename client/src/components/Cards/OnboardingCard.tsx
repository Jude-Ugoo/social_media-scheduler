import { Card, Image, Text } from "@chakra-ui/react";
import React from "react";

type OnboardingCardProps = {
  image: string;
  text: string;
  subText: string;
};

const OnboardingCard: React.FC<OnboardingCardProps> = ({
  image,
  text,
  subText,
}) => {
  return (
    <Card
      w="250px"
      h="320px"
      align="center"
      m="8px"
      p="15px"
      pt="50px"
      border="1px solid whitesmoke"
      _hover={{ border: "1px solid green" }} // Styles applied on hover
      cursor="pointer"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
    >
      <Image src={image} alt="image" h="100px" w="100px" objectFit={"cover"} />

      <Text as="b" py="25px">
        {text}
      </Text>

      <Text as="p" textAlign="center">
        {subText}
      </Text>
    </Card>
  );
};
export default OnboardingCard;
