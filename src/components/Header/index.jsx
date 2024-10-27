import { Heading, Divider, Box } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

import * as Styled from "./Header.styled";

function Header() {
  const location = useLocation();

  return (
    <header>
      <Box pos="relative">
        {location.pathname !== "/" && (
          <Styled.Link as={NavLink} to="/" color="teal.500">
            Home
          </Styled.Link>
        )}
        <Heading textAlign="center" my={3}>
          Todo list
        </Heading>
      </Box>
      <Divider />
    </header>
  );
}

export default Header;
