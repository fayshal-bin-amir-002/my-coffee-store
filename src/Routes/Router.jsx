import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5001/coffees')
      },
      {
        path: "/add-coffee",
        element: <AddCoffee></AddCoffee>
      }
    ]
  },
]);

export default router;