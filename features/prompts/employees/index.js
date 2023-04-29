const inq = require("inquirer");
const employeeFetch = require("./api");
const getRoles = require("../roles/api/")

const addEmployeePrompt = async () => {
  try {

    const roles = await getRoles.getAllRoleTitles()
   
    const roleArr = roles.map(item => item.title)



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
        name: "role_id",
        message: "What is the role of the employee?",
        choices: roleArr
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
  throw console.log(err);
  }
};

module.exports = addEmployeePrompt;
