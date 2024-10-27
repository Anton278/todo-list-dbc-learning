import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import TodoPage from "./pages/Todo";
import { PAGES_PATHNAMES } from "./utils/pagesPathnames";

export const router = createBrowserRouter([
  {
    path: PAGES_PATHNAMES.HOME,
    element: <HomePage />,
  },
  {
    path: `${PAGES_PATHNAMES.TODOS}/:id`,
    element: <TodoPage />,
  },
]);
