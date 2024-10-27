import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import TodoPage from "./pages/Todo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/todos/:id",
    element: <TodoPage />,
  },
]);
