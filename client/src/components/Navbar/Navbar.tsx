import { Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavOptions from "./NavbarOptions/NavOptions";
import NavRight from "./NavbarRight/NavRight";

import "./Navbar.css";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  //?-------------------- Remove Navbar on signIn and signUp pages----------------------------
  const withoutNav = ["/signin", "/signup"];

  //?--------------------------------------------------------------------------------------------

  //? ------------------------------------Set sticky Navbar---------------------------------------------
  const [isSticky, setIsSticky] = useState(false);
  // const navbarRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  //?------------------------------------------------------------------------------------------

  const { pathname } = useLocation();

  if (withoutNav.some((item) => pathname.includes(item))) return null;

  return (
    <Flex
      height="100px"
      width="100%"
      justify="space-between"
      padding="30px 40px"
      align="center"
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1",
        transition: "all 0.3s ease-in-out",
      }}
      className={isSticky ? "sticky" : ""}
    >
      <Heading as="h1" size="lg" ml={10}>
        ChronoPost
      </Heading>
      <NavOptions />
      <NavRight />
    </Flex>
  );
};
export default Navbar;
