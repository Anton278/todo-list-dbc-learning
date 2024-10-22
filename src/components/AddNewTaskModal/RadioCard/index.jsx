import { Box, useRadio } from "@chakra-ui/react";

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

export default RadioCard;
