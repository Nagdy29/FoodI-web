import { createBrowserRouter } from "react-router-dom";

import { Main } from "./Main";
import { Home } from "./Home";
import { Menu } from "./Menu";
import { Signup } from "./Signup";
import { Dasbord } from "./Dasbord";
import { Detials } from "./Detials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/data",
        element: <Dasbord />,
      },
      {
        path: "/detials",
        element: <Detials />,
      },

      {
        path: ":image",
        element: <Detials />,
      },
    ],
  },
  {
    path: "/singup",
    element: <Signup />,
  },
]);

export default router;
