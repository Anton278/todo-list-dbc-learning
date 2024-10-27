import { useId, useState } from "react";
import {
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
} from "@chakra-ui/react";
import { Form, Field } from "react-final-form";
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from "uuid";

import Input from "../../components/Input";
import todosState from "../../appState/todos/todos";
import validate from "./utils/validate";

function AddSubtaskModal({ isOpen, onClose, todoId }) {
  const id = useId();

  const onSubmit = ({ name, deadline }) => {
    const todo = todosState.todos.find((todo) => todo.id === todoId);
    if (!todo) {
      return;
    }
    const { subTodos } = todo;

    let id = uuidv4();
    let isUniqueId = subTodos.find((subTodo) => subTodo.id === id);

    while (!isUniqueId) {
      id = uuidv4();
      isUniqueId = !subTodos.find((todo) => todo.id === id);
    }

    todosState.updateTodo(todoId, {
      ...todo,
      subTodos: [...subTodos, { name, deadline: deadline.toUTCString(), id }],
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new sub-task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Form
            initialValues={{
              name: "",
              deadline: new Date(),
            }}
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

                <Field name={"deadline"}>
                  {({ input }) => (
                    <FormControl>
                      <FormLabel style={{ width: "fit-content" }}>
                        Deadline
                      </FormLabel>
                      <DatePicker
                        selected={values.deadline}
                        onChange={(date) => form.change("deadline", date)}
                        customInput={<ChakraInput {...input} />}
                        minDate={new Date()}
                      />
                    </FormControl>
                  )}
                </Field>
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

export default AddSubtaskModal;
