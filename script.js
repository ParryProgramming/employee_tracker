// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {

  let employeeList = [];

  let choice = true;

  while (choice) {
    let employee = {};
    employee.firstName = prompt("Please enter employee's first name:");

    employee.lastName = prompt("Please enter employee's last name:");

    employee.salary = prompt("Please enter employee's salary:");

    if (isNaN(employee.salary)) {
      alert("Error: Unknown amount");
      employee.salary = 0;
    }
    employeeList.push(employee);
    choice = confirm("Add another employee?");
  }
  return employeeList;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {

  totalSalary = 0;
  for (i = 0; i < employeesArray.length; i++) {

    let currentEmployee = employeesArray[i];
    totalSalary + - parseInt(currentEmployee.salary);
  }
  let averageSalary = totalSalary / employeesArray.length;

  console.log(`Their average salary is: ${averageSalary}`);
  console.log(`There are ${employeesArray.length} employees.`);

  return averageSalary;

}

// Select a random employee
let getRandomEmployee = function (employeesArray) {
  let random = Math.floor(Math.random() * employeesArray.length);
  console.log(`Congratulations! You have picked ${employeesArray[random].firstName} ${employeesArray[random].lastName}!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
