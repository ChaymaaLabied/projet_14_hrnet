import { createSlice } from "@reduxjs/toolkit";

const employees = [
  {
    firstName: "Emma",
    lastName: "Brown",
    dateOfBirth: "1992-05-14",
    startDate: "2023-01-10",
    department: "Engineering",
    street: "123 Maple Avenue",
    city: "San Francisco",
    state: "California",
    zipCode: "94107",
  },
  {
    firstName: "Liam",
    lastName: "Smith",
    dateOfBirth: "1988-03-22",
    startDate: "2022-08-01",
    department: "Marketing",
    street: "456 Oak Street",
    city: "New York",
    state: "New York",
    zipCode: "10001",
  },
  {
    firstName: "Olivia",
    lastName: "Johnson",
    dateOfBirth: "1995-12-11",
    startDate: "2021-11-20",
    department: "Human Resources",
    street: "789 Pine Drive",
    city: "Los Angeles",
    state: "California",
    zipCode: "90001",
  },
  {
    firstName: "Noah",
    lastName: "Williams",
    dateOfBirth: "1980-07-09",
    startDate: "2020-05-15",
    department: "Sales",
    street: "101 Elm Lane",
    city: "Chicago",
    state: "Illinois",
    zipCode: "60601",
  },
  {
    firstName: "Ava",
    lastName: "Davis",
    dateOfBirth: "1990-10-18",
    startDate: "2019-03-10",
    department: "Finance",
    street: "202 Birch Road",
    city: "Houston",
    state: "Texas",
    zipCode: "77002",
  },
];

const initialState = {
  list: employees.map((elt, idx) => ({ id: idx, ...elt })),
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.list.push({ id: state.list.length, ...action.payload });
    },
  },
});

export const { addToList } = employeeSlice.actions;

export default employeeSlice.reducer;
