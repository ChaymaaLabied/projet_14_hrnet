import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EmployeesList } from "./Pages/EmployeesList";
import NewEmployee from "./Pages/NewEmployee";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <NewEmployee />,
  },
  {
    path: "/list-employees",
    element: <EmployeesList />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={appRouter} />;
}
