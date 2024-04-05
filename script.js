// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {

  const allEmployees = [];
  let addAnother = true;

  while (addAnother) {
    let employee = {};
    employee.firstName = prompt("Please enter first name:");
    employee.lastName = prompt("Please enter last name:");
    employee.salary = prompt("Please enter salary:");
    if (isNaN(employee.salary)) {
      alert("Sorry salary is not a number");
      employee.salary = 0;
    }
    allEmployees.push(employee);
    addAnother = confirm("Would you like to add another employee?");
  }
  return allEmployees;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {

  totalSalary = 0;
  for (i = 0; i < employeesArray.length; i++) {

    const currentEmployee = employeesArray[i];
    totalSalary + - parseInt(currentEmployee.salary);
  }
  let averageSalary = totalSalary / employeesArray.length;
  console.log(`Average salary is ${averageSalary}`);
  console.log(`There are ${employeesArray.length} employees.`);
  return averageSalary;

}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  let randomEmployee = Math.floor(Math.random() * employeesArray.length);
  console.log(`Congrats to ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName}!`);
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
