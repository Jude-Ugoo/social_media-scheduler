import {
  Box,
  Button,
  Center,
  Container,
  createIcon,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import React from "react";
import LandingCard from "../components/Cards/LandingCard";

type LandingProps = {};

const Landing: React.FC<LandingProps> = () => {
  return (
    <>
      <Container maxW={"container.md"}>
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Schedule Your Social Media <br />
            <Text as={"span"} color={"green.400"}>
              Posts with Ease
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            ChronoPost is a social media posting app that makes it easy to
            schedule posts on multiple platforms at once. With ChronoPost, you
            can write your posts in advance and set a custom posting schedule
            for each platform, so you can stay active on social media without
            the hassle of manual posting
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.500"}
              // rounded={"full"}
              borderRadius={"5px"}
              px={6}
              _hover={{
                bg: "green.600",
              }}
              height={"50px"}
            >
              Get Started now
            </Button>
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue("gray.800", "gray.300")}
                w={71}
                position={"absolute"}
                right={-71}
                top={"10px"}
              />
              <Text
                fontSize={"lg"}
                fontFamily={"Caveat"}
                position={"absolute"}
                right={"-125px"}
                top={"-15px"}
                transform={"rotate(10deg)"}
              >
                Starting at $0/mo
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>

      <Flex justify={"space-between"} px="52" mt={"-20"}>
        <p>Huckberry</p>
        <p>FOOD52</p>
        <p>The Sill</p>
        <p>BURROW</p>
        <p>HappySocks</p>
        <p>DressUp</p>
      </Flex>

      <Stack align="center" justify={"center"} py="36" px="60">
        <Heading as="h1" px="15" pb="7">
          Grow your following without draining your time
        </Heading>
        <Text align="center" px="52">
          Social media can be the fastest and cheapest way to build your
          following and grow your business. But it can also take up all your
          time. Here are four ways Buffer can help.
        </Text>
      </Stack>

      <Flex>
        <Center>
          <Box pl="20">
            <Text mb={"7"}>1. SHARE CLICK-WORTHY CONTENT</Text>
            <Text mb={"7"}>Get the clicks you deserve</Text>
            <Text mb={"7"}>
              Buffer will tell you when and what to publish to make your content
              stand out
            </Text>

            <Button>Start creating</Button>
          </Box>
        </Center>
        <Spacer />

        <center>
          <Box>
            <Image
              src="/images/landing_img1.webp"
              height="35rem"
              objectFit={"contain"}
            />
          </Box>
        </center>
      </Flex>

      <Flex bg={"whitesmoke"}>
        <Center>
          <Box pl="20">
            <Text mb={"7"}>2. BUILD AN ENGAGED AUDIENCE</Text>
            <Text mb={"7"}>Grow your following</Text>
            <Text mb={"7"}>
              Buffer will share your content on the right channels, with
              suggested hashtags to help you grow.
            </Text>

            <Button>Start growing</Button>
          </Box>
        </Center>
        <Spacer />

        <center>
          <Box>
            <Image
              src="/images/landing_img2.webp"
              height="35rem"
              objectFit={"contain"}
            />
          </Box>
        </center>
      </Flex>

      <Flex>
        <Center>
          <Box pl="20">
            <Text mb={"7"}>3. SAVE TONS OF TIME</Text>
            <Text mb={"7"}>Halve your workload</Text>
            <Text mb={"7"}>
              Buffer will publish everything for you to save time and it’ll
              showcase your work with automated reports.
            </Text>

            <Button>Start optimizing</Button>
          </Box>
        </Center>
        <Spacer />
        <center>
          <Box>
            <Image
              src="/images/landing_img3.webp"
              height="35rem"
              objectFit={"contain"}
            />
          </Box>
        </center>
      </Flex>

      <Flex bg={"whitesmoke"}>
        <Center>
          <Box pl="20">
            <Text mb={"7"}>4. COORDINATE WITH EASE</Text>
            <Text mb={"7"}>Collaboration has never been easier</Text>
            <Text mb={"7"}>
              With Buffer’s permissions levels and approval flows, your team can
              work freely without any micro-management.
            </Text>

            <Button>Start collaborating</Button>
          </Box>
        </Center>
        <Spacer />

        <center>
          <Box>
            <Image
              src="/images/landing_img4.webp"
              height="35rem"
              objectFit={"contain"}
            />
          </Box>
        </center>
      </Flex>

      <Flex overflowX={"scroll"} w="100vw">
        <LandingCard />
        <LandingCard />
        <LandingCard />
        <LandingCard />
        <LandingCard />
        <LandingCard />
        <LandingCard />
        <LandingCard />
      </Flex>

      <Flex
        justify={"space-between"}
        p="10"
        mx={"100px"}
        textAlign="center"
        mb="50px"
      >
        <Stack>
          <Heading as="h2" size="2xl">
            10 years
          </Heading>
          <Text>in business</Text>
        </Stack>

        <Stack>
          <Heading as="h2" size="2xl">
            140,000
          </Heading>
          <Text>users</Text>
        </Stack>

        <Stack>
          <Heading as="h2" size="2xl">
            100k+
          </Heading>
          <Text>monthly blog readers</Text>
        </Stack>

        <Stack>
          <Heading as="h2" size="2xl">
            {" "}
            1.2m+
          </Heading>
          <Text>social followers</Text>
        </Stack>
      </Flex>

      <Flex>
        <Center>
          <Box pl="20">
            <Text mb={"7"}>And we are here to help</Text>
            <Text mb={"7"}>
              Our customer advocates are standing by 24/7 to support you via
              email and social media. We also have a comprehensive, regularly
              updated help center for those who prefer to find help themselves.
            </Text>

            <Button>Visit our help center</Button>
          </Box>
        </Center>
        <Spacer />
        <center>
          <Box>
            <Image
              src="/images/landing_img5.webp"
              height="35rem"
              objectFit={"contain"}
            />
          </Box>
        </center>
      </Flex>

      <Center pb={"30px"}>
        {" "}
        <Text fontWeight={"bold"} fontSize="xl">
          An official marketing partner of the industry leaders
        </Text>
      </Center>
      <Center>
        <Flex align={"center"}>
          <Image
            src="/images/landing_img6.png"
            height="4rem"
            objectFit={"contain"}
            mx="40px"
          />
          <Image
            src="/images/landing_img7.png"
            height="4rem"
            objectFit={"contain"}
            mx="40px"
          />
          <Image
            src="/images/landing_img8.png"
            height="4rem"
            objectFit={"contain"}
            mx="40px"
          />
        </Flex>
      </Center>
    </>
  );
};
export default Landing;

const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});
