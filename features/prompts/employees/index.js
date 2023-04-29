const inq = require("inquirer");
const employeeFetch = require("./api");

const addEmployeePrompt = async () => {
  try {
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
        type: "input",
        name: "role_id",
        message: "What is the role id of the employee?",
      },
      {
        type: "input",
        name: "manager_id",
        message: "What is the manager id of the employee?",
      },
    ]);
    employeeFetch.addEmployee(
      prompt.first_name,
      prompt.last_name,
      prompt.role_id,
      prompt.manager_id
    );
  } catch (err) {
    throw err;
  }
};

module.exports = addEmployeePrompt;
