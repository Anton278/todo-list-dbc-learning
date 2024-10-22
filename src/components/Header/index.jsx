import { Heading, Divider } from "@chakra-ui/react";

function Header() {
  return (
    <header>
      <Heading textAlign="center" my={3}>
        Todo list
      </Heading>
      <Divider />
    </header>
  );
}

export default Header;
