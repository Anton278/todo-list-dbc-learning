import { Box, Card as ChakraCard, CardBody, Text } from "@chakra-ui/react";

function Card({ title, color }) {
  return (
    <ChakraCard boxShadow="md">
      <CardBody>
        <Text>{title}</Text>
        <Box bgColor={color} mt={2} w="200px" height={3} borderRadius="base" />
      </CardBody>
    </ChakraCard>
  );
}

export default Card;
