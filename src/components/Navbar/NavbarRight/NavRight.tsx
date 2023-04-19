import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

type NavRightProps = {};

const NavRight: React.FC<NavRightProps> = () => {
  return (
    <Flex>
      <Link to="/signin">
        <Button
          // variant="solid"
          height="50px"
          display={{ base: "none", sm: "flex" }}
          width={{ base: "70px", md: "110px" }}
          mr={4}
        >
          Sign in
        </Button>
      </Link>

      <Link to="/signup">
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
      </Link>
    </Flex>
  );
};
export default NavRight;
