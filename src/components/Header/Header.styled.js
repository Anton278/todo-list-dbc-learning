import styled from "@emotion/styled";
import { Link as ChakraLink } from "@chakra-ui/react";

export const Link = styled(ChakraLink)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  height: 40px;
  display: flex;
  align-items: center;
  z-index: 1;
`;
