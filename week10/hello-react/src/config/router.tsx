import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../components/Layout";
import Contact from "../components/Contant";
import About from "../components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
