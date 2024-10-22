import { VStack } from "@chakra-ui/react";

import Card from "./Card";

function TodoList() {
  return (
    <VStack spacing={3} alignItems="stretch">
      <Card title="Schedule Team Meeting" color="red" />
      <Card title="Prepare Project Proposal" color="yellow" />
    </VStack>
  );
}

export default TodoList;
