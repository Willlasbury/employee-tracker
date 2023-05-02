const inq = require("inquirer");
const table = require("console.table")
const addDepartment = require("../departments");
const addEmployee = require("../employees");
const addRole = require("../roles");
const departmentFetch = require("../../api/departments");
const roleFetch = require("../../api/roles");
const employeeFetch = require("../../api/employees");
const updateEmployeeRolePrompt = require("../employees/updateEmployee");

const start = async () => {
  try {
    const options = [
      {
        req: "view all departments",
        diplay: true,
        res: departmentFetch.getAllDepartments,
      },
      { req: "view all roles",  diplay: true, res: roleFetch.getAllRoles },
      {
        req: "view all employees",
        diplay: true,
        res: employeeFetch.getAllEmployees,
      },
      { req: "add a role", params: true, res: addRole },
      { req: "add an emplyee", params: true, res: addEmployee },
      { req: "add a department", params: true, res: addDepartment },
      { req: "update an emplyee role", params: true, res: updateEmployeeRolePrompt },
    ];

    const promptChoices = await options.map((item) => item.req);

    let prompt = await inq.prompt([
      {
        type: "list",
        name: "start",
        message: "What would you like to do?",
        choices: promptChoices,
      },
    ]);

    for (let i = 0; i < options.length; i++) {
      const option = options[i]
      const request = option.req;
      if (request === prompt.start) {
        if (options[i].diplay){
        const response = await option.res();
        console.table("response:", response)
      } else {
        await options[i].res();
      }
    }
    }
  } catch (err) {
    throw console.log(err);
  }
};

module.exports = start;
