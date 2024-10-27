import { useParams } from "react-router-dom";
import {
  Container,
  Heading,
  Divider,
  HStack,
  Button,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

import Header from "../../components/Header";
import AddSubtaskModal from "../../components/AddSubtaskModal";
import Card from "../../components/Card";
import { selectTodoById } from "../../appState/todos/selectors";

function TodoPage() {
  const { id } = useParams();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const todo = selectTodoById(id);

  return (
    <>
      <Header />
      <Heading
        textAlign="center"
        my={3}
        size="md"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            backgroundColor: todo.color,
            marginRight: "12px",
          }}
        />
        {todo.name} - Subtasks
      </Heading>
      <Divider />
      <Container mb={3}>
        <HStack mt={4} mb={3} justifyContent="flex-end">
          <Button colorScheme="teal" variant="solid" onClick={onOpen}>
            Add
          </Button>
        </HStack>
        <VStack spacing={3} alignItems="stretch">
          {todo.subTodos?.map((subTodo) => (
            <Card
              title={subTodo.name}
              deadline={subTodo.deadline}
              key={subTodo.id}
            />
          ))}
        </VStack>
      </Container>
      <AddSubtaskModal isOpen={isOpen} onClose={onClose} todoId={id} />
    </>
  );
}

export default observer(TodoPage);
