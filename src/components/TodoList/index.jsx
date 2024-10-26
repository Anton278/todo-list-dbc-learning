import { VStack, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

import Card from "./Card";
import todosState from "../../appState/todos/todos";

function TodoList() {
  return (
    <VStack spacing={3} alignItems="stretch">
      {todosState.todos.length ? (
        todosState.todos.map((todo) => (
          <Card title={todo.name} color={todo.color} key={todo.id} />
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
