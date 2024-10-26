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

function AddNewTaskModal({ isOpen, onClose }) {
  const id = useId();

  const colors = [
    theme.colors.red[400],
    theme.colors.yellow[400],
    theme.colors.blue[400],
  ];

  const validate = (values) => {
    const errors = {};

    if (values.name?.length < 2) {
      errors.name = "Task name must be min 2 characters";
    }
    if (!values.name?.length) {
      errors.name = "Task name is required";
    }

    return errors;
  };

  const onSubmit = (values) => {
    todosState.addTodo(values.name, values.color);
    console.log("submitted: ", values);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form
            initialValues={{
              name: "",
              color: colors[2],
            }}
            onSubmit={onSubmit}
            validate={validate}
            render={(props) => (
              <form id={id} onSubmit={props.handleSubmit}>
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
                    {colors.map((color, i) => {
                      return (
                        <RadioCard
                          key={color}
                          checked={color === props.values.color}
                          value={color}
                          name="color"
                          onChange={props.form.change}
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
