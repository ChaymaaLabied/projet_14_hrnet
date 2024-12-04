HRnet Project README
Description
HRnet is a React application for managing employee information. It allows users to view a list of current employees and create new employee records. The app uses Material-UI for styling and React-Redux for state management.

Features
Employee List: View the list of current employees.
Create Employee: Add new employees with details such as name, date of birth, start date, address, and department.
Responsive Design: User-friendly UI for both desktop and mobile devices.
Search Functionality: Filter employee records based on any field.

Usage
Navigate to /list-employees to view the employee list.
Use the search bar to filter employees by any field.
Go to / to create a new employee record.
Fill in the form and click "Save" to add a new employee. A modal will confirm the creation.

Technologies Used
React: For building the user interface.
Redux: For state management.
Material-UI: For UI components and styling.
React Router: For navigation between pages.

Project Structure
src/Pages/EmployeesList.jsx: Component to display the list of employees.
src/Pages/NewEmployee.jsx: Component for creating new employee records.
src/redux/employeesSlice.js: Redux slice for managing employee data.
src/utils/utils.js: Utility functions (e.g., inputify function).
src/styles/: CSS files for component styling.

Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit them (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a pull request.

License
This project is licensed under the MIT License.
