import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { router } from "./router";
// import ErrorBoundary from "./components/ErrorBoundary";

import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      {/* <ErrorBoundary fallback={<div>error</div>}> */}
      <RouterProvider router={router} />
      {/* </ErrorBoundary> */}
    </ChakraProvider>
  );
}

export default App;
