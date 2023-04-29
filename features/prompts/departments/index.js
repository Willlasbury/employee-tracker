const inq = require("inquirer");
const departmentFetch = require("./api");

const addDepartmentPrompt = async () => {
  try {
    const prompt = await inq.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the department?",
      },
    ]);
    departmentFetch.addDepartment(prompt.name);
  } catch (err) {
    throw err;
  }
};

module.exports = addDepartmentPrompt;
