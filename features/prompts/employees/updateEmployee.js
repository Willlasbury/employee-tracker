const inq = require("inquirer");
const employeeFetch = require("../../api/employees");
const getRoles = require("../../api/roles");

const updateEmployeeRolePrompt = async () => {
  try {
    // get all employees and convert to array of names for the prompt
    const employees = await employeeFetch.getAllEmployees();
    const employeesArr = employees.map(
      (employee) => `${employee.first_name} ${employee.last_name}`
    );

    // get roles and convert to array of titles for the prompt
    const roles = await getRoles.getAllRoles();
    const rolesArr = roles.map((role) => role.title);

    // create prompt
    const prompt = await inq.prompt([
      {
        type: "list",
        name: "employee",
        message: "Which employee's role do you want to change?",
        choices: employeesArr,
      },
      {
        type: "list",
        name: "role",
        message: "Which role should they have?",
        choices: rolesArr,
      },
    ]);

    // get specific employee id
    const filteredEmployee = employees.filter((employee) => {
      if (`${employee.first_name} ${employee.last_name}` === prompt.employee) {
        return employee;
      }
    });
    const employeeId = filteredEmployee[0].id;

    // get role id
    const filterRoles = roles.filter((value) => {
      if (value.title === prompt.role) return value;
    });
    const roleId = filterRoles[0].id;

    // call function to create employee
    const response = await employeeFetch.updateEmployeeRole(employeeId, roleId);
  
    if (response.affectedRows === 1) {
      console.log(
        `\nYou have changed ${filteredEmployee[0].first_name}'s role.`
      );
    } else {
      console.log(`Error: ${response.statusText}`);
    }
  } catch (err) {
    throw console.log(err);
  }
};

module.exports = updateEmployeeRolePrompt;
