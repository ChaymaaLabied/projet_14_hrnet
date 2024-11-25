import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addToList } = employeeSlice.actions;

export default employeeSlice.reducer;