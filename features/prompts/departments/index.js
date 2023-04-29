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
    const response = await departmentFetch.addDepartment(prompt.name);
    
    if (response.statusText === 'OK'){
      console.log(`\nYou have added ${prompt.name} to the Departments.`)
    }
  } catch (err) {
    throw console.log(err);
  }
};

module.exports = addDepartmentPrompt;
