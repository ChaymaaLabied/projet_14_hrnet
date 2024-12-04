import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import "../style/employeesList.css"

const columns = [
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "startDate", headerName: "Start Date", width: 120 },
  { field: "department", headerName: "Department", width: 120 },
  { field: "dateOfBirth", headerName: "Date of Birth", width: 150 },
  { field: "street", headerName: "Street", width: 120 },
  { field: "city", headerName: "City", width: 120 },
  { field: "state", headerName: "State", width: 120 },
  { field: "zipCode", headerName: "Zip Code", width: 120 },
];

const paginationModel = { page: 0, pageSize: 5 };

export const EmployeesList = () => {
  const employeesList = useSelector((state) => state.employee.list);
  const [search, setSearch] = useState("");

  const [searchResult, setSearchResult] = useState(employeesList);

  useEffect(() => {
    setSearchResult(
      employeesList.filter((e) =>
        Object.values(e).some(
          (elt) =>
            elt && elt.toString().toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }, [employeesList, search]);

  return (
    <div id="employeesList_container">
      <h3 className="employeesList_title">Current Employees</h3>
      <label htmlFor="search" className="employeesList_label">
        Search
      </label>
      <input
        type="text"
        id="search"
        className="employeesList_searchInput"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Paper className="employeesList_tableContainer">
        <DataGrid
          rows={searchResult}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{
            border: 1,
            borderColor: "#566824",
            "& .MuiDataGrid-cell": {
              color: "#37474F",
              fontSize: "14px",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#F1F8E9",
              fontWeight: "bold",
              fontSize: "16px",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "#E8F5E9",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#F1F8E9",
            },
          }}
        />
      </Paper>
      <Link to="/" className="employeesList_homeLink">
        Home
      </Link>
    </div>
  );
};
