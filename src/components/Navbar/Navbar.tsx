import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import NavOptions from "./NavbarOptions/NavOptions";
import NavRight from "./NavbarRight/NavRight";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const withoutNav = ["/signin", "/signup"];
  const { pathname } = useLocation();

  if (withoutNav.some((item) => pathname.includes(item))) return null;

  return (
    <Flex
      height="100px"
      width="100%"
      justify="space-between"
      padding="30px 40px"
      align="center"
    >
      <Heading as="h1" size="lg" ml={10}>
        Buffer
      </Heading>
      <NavOptions />
      <NavRight />
    </Flex>
  );
};
export default Navbar;
