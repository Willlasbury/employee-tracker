const inq = require("inquirer");
const employeeFetch = require("../../api/employees");
const getRoles = require("../../api/roles");
const getEmployees = require("../../api/employees");

const addEmployeePrompt = async () => {
  try {
    // get roles for the prompt
    const roles = await getRoles.getAllRoles();
    const roleArr = roles.map((item) => item.title);

    // get managers for the prompt
    const managers = await getEmployees.getAllManagers();

    // add a none option for managers
    managers.unshift({ first_name: "none", last_name: "" });

    // create a list for manager names for the prompt
    const managerArr = managers.map(
      (item) => `${item.first_name} ${item.last_name}`
    );

    const prompt = await inq.prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the first name of the employee?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the last name of the employee?",
      },
      {
        type: "list",
        name: "role",
        message: "What is the role of the employee?",
        choices: roleArr,
      },
      {
        type: "list",
        name: "manager",
        message: "Who is the manager of the employee?",
        choices: managerArr,
      },
    ]);
    // get role id
    const filterRoles = roles.filter((value) => {
      if (value.title === prompt.role) return value;
    });
    const roleId = filterRoles[0].id;

    // get manager id
    const filterManager = managers.filter((value) => {
      if (`${value.first_name} ${value.last_name}` === prompt.manager) {
        return value;
      }
    });
    // console.log("filterManager:", filterManager)
    const managerId = filterManager[0].id || undefined;
    // console.log("managerId:", managerId)
    // call function to create employee
    const response = await employeeFetch.addEmployee(
      prompt.first_name,
      prompt.last_name,
      roleId,
      managerId
    );

    // console.log(response)
    if (response.statusText === "OK") {
      console.log(
        `\nYou have added ${prompt.first_name} ${prompt.last_name} to your employees.`
      );
    } else {
      console.log(`Error: ${response.statusText}`);
    }
  } catch (err) {
    throw console.log(err);
  }
};

module.exports = addEmployeePrompt;
