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

import Input from "../../components/Input";

function AddSubtaskModal({ isOpen, onClose }) {
  const id = useId();
  const [startDate, setStartDate] = useState(new Date());

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
    // todosState.addTodo(values.name, values.color);
    console.log("submitted: ", values);
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
            render={(props) => (
              <form id={id} onSubmit={props.handleSubmit}>
                {console.log(props.values)}
                <div style={{ marginBottom: 10 }}>
                  <Input
                    name="name"
                    label="Name"
                    placeholder="Schedule Team Meeting"
                  />
                </div>

                <div>
                  <Field name={"deadline"}>
                    {({ input }) => (
                      <FormControl>
                        <FormLabel style={{ width: "fit-content" }}>
                          Deadline
                        </FormLabel>
                        <DatePicker
                          selected={props.values.deadline}
                          onChange={(date) =>
                            props.form.change("deadline", date)
                          }
                          customInput={<ChakraInput {...input} />}
                          minDate={new Date()}
                        />
                      </FormControl>
                    )}
                  </Field>
                </div>
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
