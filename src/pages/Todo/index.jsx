import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Heading,
  Divider,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input as ChakraInput,
  FormControl,
  FormLabel,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import Header from "../../components/Header";
import AddSubtaskModal from "../../components/AddSubtaskModal";
import Card from "../../components/Card";

function TodoPage() {
  const { id } = useParams();
  const { isOpen, onClose, onOpen } = useDisclosure();

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
            backgroundColor: "red",
            marginRight: "12px",
          }}
        />
        Create grossery list - Subtasks
      </Heading>
      <Divider />
      <Container mb={3}>
        <HStack mt={4} mb={3} justifyContent="flex-end">
          <Button colorScheme="teal" variant="solid" onClick={onOpen}>
            Add
          </Button>
        </HStack>
        <VStack spacing={3} alignItems="stretch">
          <Card
            title={"Subtask 1"}
            deadline={"2024-10-27T14:53:54.381Z"}
            id={1}
          />
          <Card
            title={"Subtask 2"}
            deadline={"2024-10-27T14:53:54.381Z"}
            id={2}
          />
        </VStack>
      </Container>
      <AddSubtaskModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default TodoPage;
