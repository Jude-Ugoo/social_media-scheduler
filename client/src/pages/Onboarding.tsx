import { Box, Card, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import OnboardingCard from "../components/Cards/OnboardingCard";

type OnboardingProps = {};

const Onboarding: React.FC<OnboardingProps> = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text fontSize="4xl" fontWeight="bold" my="30px">
        Welcome to ChronoPost
      </Text>
      <Flex my="40px">
        <OnboardingCard
          image={"/images/onbd_img2.jpeg"}
          text={"Publishing"}
          subText={"Plan, Create, Schedule content"}
        />
        <OnboardingCard
          image={"/images/onbd_img3.jpeg"}
          text={"Analytics"}
          subText={"Optimize and learn from your content"}
        />
        <OnboardingCard
          image={"/images/onbd_img4.jpeg"}
          text={"Engagement"}
          subText={"Answer comments to get closer to your audience"}
        />
        <OnboardingCard
          image={"/images/onbd_img1.jpeg"}
          text={"Start Page"}
          subText={"Build a landing page in minutes"}
        />
      </Flex>

      <Link to="/onboarding/connect">
        <Text as="b" color="green.600">
          Skip Selection
        </Text>
      </Link>
    </div>
  );
};

export default Onboarding;
