import { VStack, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

import Card from "./Card";
import todos from "../../appState/todos/todos";

function TodoList() {
  return (
    <VStack spacing={3} alignItems="stretch">
      {todos.todos.length ? (
        todos.todos.map((todo) => (
          <Card title={todo.title} color={todo.color} key={todo.id} />
        ))
      ) : (
        <Text textAlign="center" mt={8}>
          No todos added yet
        </Text>
      )}
    </VStack>
  );
}

export default observer(TodoList);
