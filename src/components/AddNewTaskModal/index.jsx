import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Button,
  HStack,
  FormControl,
  FormLabel,
  theme,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { Form } from "react-final-form";
import { useId } from "react";

import RadioCard from "./RadioCard";
import todosState from "../../appState/todos/todos";
import Input from "../Input";
import validate from "./utils/validate";

function AddNewTaskModal({ isOpen, onClose }) {
  const id = useId();

  const colors = [
    theme.colors.red[400],
    theme.colors.yellow[400],
    theme.colors.blue[400],
  ];

  const onSubmit = (values) => {
    todosState.addTodo(values.name, values.color);
  };

  const initialValues = {
    name: "",
    color: colors[2],
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, values, form }) => (
              <form id={id} onSubmit={handleSubmit}>
                <div style={{ marginBottom: 10 }}>
                  <Input
                    name="name"
                    label="Name"
                    placeholder="Schedule Team Meeting"
                  />
                </div>

                <FormControl>
                  <FormLabel mb={1} w="fit-content">
                    Color
                  </FormLabel>
                  <HStack>
                    {colors.map((color) => {
                      return (
                        <RadioCard
                          key={color}
                          checked={color === values.color}
                          value={color}
                          name="color"
                          onChange={form.change}
                        />
                      );
                    })}
                  </HStack>
                </FormControl>
              </form>
            )}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="teal"
            mr={3}
            variant={"outline"}
            onClick={onClose}
          >
            Close
          </Button>
          <Button colorScheme="teal" type="submit" form={id}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default observer(AddNewTaskModal);
