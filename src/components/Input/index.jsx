import {
  Box,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field } from "react-final-form";

function Input({ label, placeholder, name }) {
  return (
    <Field name={name}>
      {({ input, meta }) => (
        <FormControl isInvalid={!!meta.error && meta.touched}>
          {label && (
            <FormLabel mb={1} w="fit-content">
              Name
            </FormLabel>
          )}
          <Box pos="relative" pb="27px">
            <ChakraInput placeholder={placeholder} {...input} />
            {meta.error && meta.touched && (
              <FormErrorMessage pos="absolute">{meta.error}</FormErrorMessage>
            )}
          </Box>
        </FormControl>
      )}
    </Field>
  );
}

export default Input;
