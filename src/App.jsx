import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { router } from "./router";

import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
