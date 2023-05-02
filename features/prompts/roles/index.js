const inq = require("inquirer");
const roleFetch = require("../../api/roles");
const getDepartments = require('../../api/departments')

const addRolePrompt = async () => {
  try {

    const departments = await getDepartments.getAllDepartments();
    const departmentsArr = departments.map((item) => item.name);

    const prompt = await inq.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of the role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary of the role?",
      },
      {
        type: "list",
        name: "department",
        message: "What is the department id of the role?",
        choices: departmentsArr
      }
    ]);
    
    // get role id
    const filterDepartments = departments.filter((value) => {
      if (value.name === prompt.department) return value;
    });

    const departmentId = filterDepartments[0].id;


    const response = await roleFetch.addRole(
      prompt.title,
      prompt.salary,
      departmentId
    );

    if (response.statusText === "OK") {
      console.log(
        `\nYou have added ${prompt.title} to your roles.`
      );
    } else {
      console.log(`Error: ${response}`);
    }
  } catch (err) {
    throw console.log(err);
  }
};

module.exports = addRolePrompt;
