import { Container, Button, HStack, useDisclosure } from "@chakra-ui/react";

import Header from "../../components/Header";
import TodoList from "../../components/TodoList";
import AddNewTaskModal from "../../components/AddNewTaskModal";

function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Header />
      <Container mb={3}>
        <HStack mt={4} mb={3} justifyContent="flex-end">
          <Button colorScheme="teal" variant="solid" onClick={onOpen}>
            Add
          </Button>
        </HStack>
        <TodoList />
      </Container>
      <AddNewTaskModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default HomePage;
