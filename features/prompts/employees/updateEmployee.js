const inq = require("inquirer");
const employeeFetch = require("../../api/employees");
const getRoles = require("../../api/roles");



const updateEmployeeRolePrompt = async () => {
  try {
    // get all employees
    const employees = await employeeFetch.getAllEmployees();
    const employeesArr = employees.map((item) => item.title);
    // get roles for the prompt
    const roles = await getRoles.getAllRoles();
    const roleArr = roles.map((item) => item.title);

    // create prompt
    const prompt = await inq.prompt([
      {
        type: "list",
        name: "employee",
        message: "Which employee's role do you want to change?",
        choices: employeesArr
      },
      {
        type: "list",
        name: "role",
        message: "Which role should they have?",
        choices: roleArr
      }
    ]);

    // // get role id
    // const filterRoles = roles.filter((value) => {
    //   if (value.title === prompt.role) return value;
    // });
    // const roleId = filterRoles[0].id;

    


    // // call function to create employee
    // const response = await employeeFetch.updateEmployee(
      
    // );

    // // console.log(response)
    // if (response.statusText === "OK") {
    //   console.log(
    //     `\nYou have added ${prompt.first_name} ${prompt.last_name} to your employees.`
    //   );
    // } else {
    //   console.log(`Error: ${response.statusText}`);
    // }
  } catch (err) {
    throw console.log(err);
  }
};

module.exports = updateEmployeeRolePrompt;
