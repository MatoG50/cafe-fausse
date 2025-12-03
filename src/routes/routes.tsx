import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import App from "../App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/reservations", element: <Reservations /> },
      { path: "/about", element: <About /> },
      { path: "/gallery", element: <Gallery /> },
    ],
  },
]);
export default router;
