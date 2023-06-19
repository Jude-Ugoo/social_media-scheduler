import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";

const NavOptions: React.FC = () => {
  return (
    <Flex align="center">
      <List style={{ display: "flex", margin: "10px" }}>
        <ListItem fontSize={20} mr={8}>
          Tools
          <ListIcon as={ChevronDownIcon} />
        </ListItem>
        <ListItem fontSize={20} mr={8}>
          Channels
          <ListIcon as={ChevronDownIcon} />
        </ListItem>
        <ListItem fontSize={20} mr={8}>
          Pricing
        </ListItem>
        <ListItem fontSize={20} mr={8}>
          Blog
        </ListItem>
      </List>
    </Flex>
  );
};
export default NavOptions;
