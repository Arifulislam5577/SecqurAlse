import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AddPeople from "../pages/AddPeople";
import Home from "../pages/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/:id", element: <Home /> },
      { path: "/create", element: <AddPeople /> },
    ],
  },
]);

export default Routes;
