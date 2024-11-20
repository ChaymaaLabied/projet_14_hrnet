import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
import { EmployeesList } from "./Pages/EmployeesList";
import NewEmployee from "./Pages/NewEmployee";


export default function Router() {
const Router = createBrowserRouter([
  {
    path: "/",
    element: <NewEmployee />,
  },
  {
    path: "/list-employees",
    element: <EmployeesList />,
  },
]);
return <RouterProvider router={Router} />
}
