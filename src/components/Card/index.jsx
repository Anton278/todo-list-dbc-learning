import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card as ChakraCard, CardBody, Text } from "@chakra-ui/react";

import { PAGES_PATHNAMES } from "../../utils/pagesPathnames";

function Card({ title, color, deadline, id }) {
  const wrapperRef = useRef();

  const preconditions = [
    typeof title === "string",
    (typeof color === "string" && typeof deadline === "undefined") ||
      (typeof color === "undefined" && typeof deadline === "string"),
    typeof id === "string" || typeof id === "undefined",
  ];
  if (preconditions.some((precondition) => precondition === false)) {
    throw new Error("Card component. Precondition failed");
  }

  const navigate = useNavigate();

  const onClick = () => {
    if (deadline) {
      return;
    }

    navigate(`${PAGES_PATHNAMES.TODOS}/${id}`);
  };

  useEffect(() => {
    if (!wrapperRef.current) {
      return;
    }

    (() => {
      const titleNodeXpath = `//*[text()='${title}']`;
      const titleNode = document.evaluate(
        titleNodeXpath,
        wrapperRef.current,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;

      const colorNodeXpath = "//*[@id='color-box']";
      const colorNode = document.evaluate(
        colorNodeXpath,
        wrapperRef.current,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      // const colorNodeStyles = getComputedStyle(colorNode);

      const deadlineNodeXpath = `//*[text()='${deadline}']`;
      const deadlineNode = document.evaluate(
        deadlineNodeXpath,
        wrapperRef.current,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
      console.log("deadlineNode: ", deadlineNode);

      const postconditions = [
        { name: "There is a title", condition: titleNode !== null },
        {
          name: "There is a color or deadline",
          condition: colorNode || deadlineNode,
        },
      ];
    })();
  }, [wrapperRef]);

  return (
    <ChakraCard boxShadow="md" onClick={onClick} ref={wrapperRef}>
      <CardBody>
        <Text mb={2}>{title}</Text>
        {color ? (
          <Box
            bgColor={color}
            w="200px"
            height={3}
            borderRadius="base"
            id="color-box"
          />
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
