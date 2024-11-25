import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const columns = [
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "startDate", headerName: "Start date", width: 130 },
  { field: "department", headerName: "Department", width: 130 },
  { field: "dateOfBirth", headerName: "Date of birth", width: 130 },
  { field: "street", headerName: "Street", width: 250 },
  { field: "city", headerName: "City", width: 130 },
  { field: "state", headerName: "State", width: 70 },
  { field: "zipCode", headerName: "Zip code", width: 100 },
];

const paginationModel = { page: 0, pageSize: 5 };

export const EmployeesList = () => {
  const employeesList = useSelector((state) => state.employee.list);

  return (
    <div id="employee-div" className="container">
      <h3>Current Employees</h3>
      <Paper
        sx={{
          height: 400,
          width: "80%",
          marginTop: "50px",
          marginBottom: "20px",
        }}
      >
        <DataGrid
          rows={employeesList}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 1 }}
        />
      </Paper>
      <Link to="/">Home</Link>
    </div>
  );
};