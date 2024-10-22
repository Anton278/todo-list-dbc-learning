import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Box,
  Button,
  HStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  theme,
  useRadioGroup,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

import RadioCard from "./RadioCard";

function AddNewTaskModal({ isOpen, onClose }) {
  const colors = [
    theme.colors.red[400],
    theme.colors.yellow[400],
    theme.colors.blue[400],
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",
    defaultValue: theme.colors.blue[400],
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isInvalid={false}>
            <FormLabel mb={1} w="fit-content">
              Name
            </FormLabel>
            <Box pos="relative" mb="27px">
              <Input placeholder="Schedule Team Meeting" />
              <FormErrorMessage pos="absolute">
                Field is required
              </FormErrorMessage>
            </Box>
          </FormControl>

          <FormControl isInvalid={false}>
            <FormLabel mb={1} w="fit-content">
              Color
            </FormLabel>
            <HStack {...group}>
              {colors.map((color) => {
                const radio = getRadioProps({ value: color });
                return <RadioCard key={color} {...radio} />;
              })}
            </HStack>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} variant={"outline"}>
            Close
          </Button>
          <Button colorScheme="teal">Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddNewTaskModal;
