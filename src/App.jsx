import {
  Heading,
  Divider,
  Container,
  Box,
  Button,
  Card,
  CardBody,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  theme,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";

// theme.colors.blackAlpha.;

function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        w="40px"
        h="40px"
        background={props.value}
        borderRadius={"50%"}
        cursor={"pointer"}
        _checked={{
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: "green.400",
        }}
      />
    </Box>
  );
}

function App() {
  const options = [
    theme.colors.red[400],
    theme.colors.yellow[400],
    theme.colors.blue[400],
  ];
  const { onClose } = useDisclosure();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",
    defaultValue: theme.colors.blue[400],
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <div>
      <header>
        <Heading textAlign="center" my={3}>
          Todo list
        </Heading>
        <Divider />
      </header>
      <Container mb={3}>
        <HStack mt={4} mb={3} justifyContent="flex-end">
          <Button colorScheme="teal" variant="solid">
            Add
          </Button>
        </HStack>
        <VStack spacing={3} alignItems="stretch">
          <Card boxShadow="md">
            <CardBody>
              <Text>Schedule Team Meeting</Text>
              <Box
                bgColor="yellow"
                mt={2}
                w="200px"
                height={3}
                borderRadius="base"
              ></Box>
            </CardBody>
          </Card>
          <Card boxShadow="md">
            <CardBody>
              <Text>Schedule Team Meeting</Text>
              <Box
                bgColor="red"
                mt={2}
                w="200px"
                height={3}
                borderRadius="base"
              ></Box>
            </CardBody>
          </Card>
        </VStack>
      </Container>
      <Modal isOpen={true} onClose={onClose}>
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
                {options.map((value) => {
                  const radio = getRadioProps({ value });
                  return (
                    <RadioCard key={value} {...radio}>
                      {value}
                    </RadioCard>
                  );
                })}
              </HStack>
            </FormControl>
            {/* todo: add select with predefined colors */}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} variant={"outline"}>
              Close
            </Button>
            <Button colorScheme="teal">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;
