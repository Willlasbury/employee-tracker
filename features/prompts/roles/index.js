const inq = require("inquirer");
const roleFetch = require("./api");

const addRolePrompt = async () => {
  try {
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
        type: "input",
        name: "department",
        message: "What is the department id of the role?",
      }
    ]);
    roleFetch.addRole(
      prompt.title,
      prompt.salary,
      prompt.department
    );
  } catch (err) {
    throw console.log(err);
  }
};

module.exports = addRolePrompt;
