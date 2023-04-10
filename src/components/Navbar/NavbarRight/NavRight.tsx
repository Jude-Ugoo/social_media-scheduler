import { Button, Flex } from "@chakra-ui/react";
import React from "react";

type NavRightProps = {};

const NavRight: React.FC<NavRightProps> = () => {
  return (
    <Flex>
      <Button
        // variant="solid"
        height="50px"
        display={{ base: "none", sm: "flex" }}
        // width={{ base: "70px", md: "110px" }}
        mr={4}
      >
        Login
      </Button>

      <Button
        variant="solid"
        height="50px"
        display={{ base: "none", sm: "flex" }}
        // width={{ base: "70px", md: "110px" }}
        mr={4}
        colorScheme="green"
      >
        Get started now
      </Button>
    </Flex>
  );
};
export default NavRight;
