import { Box, Card as ChakraCard, CardBody, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PAGES_PATHNAMES } from "../../utils/pagesPathnames";

function Card({ title, color, deadline, id }) {
  const navigate = useNavigate();

  const onClick = () => {
    if (deadline) {
      return;
    }

    navigate(`${PAGES_PATHNAMES.TODOS}/${id}`);
  };

  return (
    <ChakraCard boxShadow="md" onClick={onClick}>
      <CardBody>
        <Text mb={2}>{title}</Text>
        {color ? (
          <Box bgColor={color} w="200px" height={3} borderRadius="base" />
        ) : (
          <Text>
            Deadline: <b>{deadline}</b>
          </Text>
        )}
      </CardBody>
    </ChakraCard>
  );
}

export default Card;
