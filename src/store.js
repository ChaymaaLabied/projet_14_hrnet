import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./redux/employeesSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});