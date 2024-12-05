import { useEffect } from "react";
import { Heading, Divider, Box } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

import { handleDbcException } from "../../utils/handleDbcException";

import * as Styled from "./Header.styled";

function Header() {
  const location = useLocation();

  useEffect(() => {
    (() => {
      const homeLinkNode = document.querySelector(`a[href='/']`);

      const postconditions = [
        {
          name: "Home link shows based on location pathname",
          condition:
            (location.pathname === "/" && !homeLinkNode) ||
            (location.pathname !== "/" && homeLinkNode),
        },
      ];
      postconditions.forEach(({ name, condition }) => {
        if (!condition) {
          handleDbcException(name);
        }
      });
    })();
  }, [location.pathname]);

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
