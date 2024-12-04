import {
  Button,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  createTheme,
} from "@mui/material";
import { Modal } from "@chmicha01/modal-oc";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToList } from "../redux/employeesSlice.js";
import { states } from "../utils/constants.js";
import { inputify } from "../utils/utils.js";
import "../style/newEmployee.css";
import { lime } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: lime,
  },
});

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

  return (
    <div className="new-employee__container">
      <h1 className="new-employee__title">HRnet</h1>
      <Link to="/list-employees" className="new-employee__link">
        View Current Employees
      </Link>
      <h2 className="new-employee__subtitle">Create Employee</h2>
      <form className="new-employee__form">
        <TextField
          fullWidth
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={inputify(setFirstName)}
          margin="normal"
          className="new-employee__input"
        />
        <TextField
          fullWidth
          label="Last Name"
          variant="outlined"
          value={lastName}
          onChange={inputify(setLastName)}
          margin="normal"
          className="new-employee__input"
        />
        <TextField
          fullWidth
          label="Date of Birth"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          value={dateOfBirth}
          onChange={inputify(setDateOfBirth)}
          margin="normal"
          className="new-employee__input"
        />
        <TextField
          fullWidth
          label="Start Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          value={startDate}
          onChange={inputify(setStartDate)}
          margin="normal"
          className="new-employee__input"
        />
        <fieldset className="new-employee__fieldset">
          <legend className="new-employee__legend">Address</legend>
          <TextField
            fullWidth
            label="Street"
            variant="outlined"
            value={street}
            onChange={inputify(setStreet)}
            margin="normal"
            className="new-employee__input"
          />
          <TextField
            fullWidth
            label="City"
            variant="outlined"
            value={city}
            onChange={inputify(setCity)}
            margin="normal"
            className="new-employee__input"
          />
          <FormControl
            fullWidth
            margin="normal"
            className="new-employee__select"
          >
            <InputLabel>State</InputLabel>
            <Select value={state} onChange={inputify(setState)} label="State">
              {states.map((state) => (
                <MenuItem key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Zip Code"
            type="number"
            variant="outlined"
            value={zipCode}
            onChange={inputify(setZipCode)}
            margin="normal"
            className="new-employee__input"
          />
        </fieldset>
        <FormControl fullWidth margin="normal" className="new-employee__select">
          <InputLabel>Department</InputLabel>
          <Select
            value={department}
            onChange={inputify(setDepartement)}
            label="Department"
          >
            <MenuItem value="Sales">Sales</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
            <MenuItem value="Engineering">Engineering</MenuItem>
            <MenuItem value="Human Resources">Human Resources</MenuItem>
            <MenuItem value="Legal">Legal</MenuItem>
          </Select>
        </FormControl>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            className="new-employee__button"
            color="primary"
            onClick={onSubmit}
          >
            Save
          </Button>
        </ThemeProvider>
      </form>
      <Modal
        isOpen={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <h3 className="new-employee__modal-message">Employee Created!</h3>
      </Modal>
    </div>
  );
};

export default NewEmployee;
