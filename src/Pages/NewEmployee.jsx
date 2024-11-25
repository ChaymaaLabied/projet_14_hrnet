import {
    Box,
    Button,
    FormControl,
    Input,
    MenuItem,
    Modal,
    Select,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  import { useDispatch } from "react-redux";
  import { Link } from "react-router-dom";
  import { addToList } from "../redux/employeesSlice.js";
  import { states } from "../utils/constants.js";
  import { inputify } from "../utils/utils.js";
//   import "./css/NewEmployee.css";
  
  const NewEmployee = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState();
    const [startDate, setStartDate] = useState();
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [department, setDepartement] = useState("Sales");
  
    // Modal
    const [openModal, setOpen] = useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);
  
    const dispatch = useDispatch();
  
    const onSubmit = () => {
      const employee = {
        firstName,
        lastName,
        dateOfBirth,
        startDate,
        department,
        street,
        city,
        state,
        zipCode,
      };
      dispatch(addToList(employee));
  
      handleOpenModal();
    };
  
    const style = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    };
  
    return (
      <div>
        <div class="title">
          <h1>HRnet</h1>
        </div>
        <div class="container">
          <Link to="/list-employees">View Current Employees</Link>
          <h2>Create Employee</h2>
          <form action="#" id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <Input
              type="text"
              id="first-name"
              value={firstName}
              onChange={inputify(setFirstName)}
            />
  
            <label htmlFor="last-name">Last Name</label>
            <Input
              type="text"
              id="last-name"
              value={lastName}
              onChange={inputify(setLastName)}
            />
  
            <label htmlFor="date-of-birth">Date of Birth</label>
            <Input
              id="date-of-birth"
              type="date"
              value={dateOfBirth}
              onChange={inputify(setDateOfBirth)}
            />
  
            <label htmlFor="start-date">Start Date</label>
            <Input
              id="start-date"
              type="date"
              value={startDate}
              onChange={inputify(setStartDate)}
            />
  
            <fieldset class="address">
              <legend>Address</legend>
  
              <label htmlFor="street">Street</label>
              <Input
                id="street"
                type="text"
                value={street}
                onChange={inputify(setStreet)}
              />
  
              <label htmlFor="city">City</label>
              <Input
                id="city"
                type="text"
                value={city}
                onChange={inputify(setCity)}
              />
  
              <label htmlFor="state">State</label>
              <FormControl fullWidth>
                <Select
                  labelId="state"
                  id="state"
                  value={state}
                  label="state"
                  onChange={inputify(setState)}
                >
                  {states.map((state) => (
                    <MenuItem key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
  
              <label htmlFor="zip-code">Zip Code</label>
              <Input
                id="zip-code"
                type="number"
                value={zipCode}
                onChange={inputify(setZipCode)}
              />
            </fieldset>
  
            <label htmlFor="department">Department</label>
            <FormControl fullWidth>
              <Select
                labelId="department"
                id="department"
                value={department}
                label="Department"
                onChange={inputify(setDepartement)}
              >
                <MenuItem value="Sales">Sales</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
                <MenuItem value="Engineering">Engineering</MenuItem>
                <MenuItem value="Human Resources">Human Resources</MenuItem>
                <MenuItem value="Legal">Legal</MenuItem>
              </Select>
            </FormControl>
          </form>
          <Button onClick={onSubmit}>Save</Button>
        </div>
  
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Employee Created!
            </Typography>
          </Box>
        </Modal>
        <div id="confirmation" class="modal"></div>
      </div>
    );
  };
  
  export default NewEmployee;