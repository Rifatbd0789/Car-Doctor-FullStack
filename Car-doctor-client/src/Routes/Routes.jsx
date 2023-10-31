import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import Private from "./Private";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/checkout/:id",
        element: (
          <Private>
            <Checkout />
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <Private>
            <Bookings />
          </Private>
        ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
