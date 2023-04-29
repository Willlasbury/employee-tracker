const inq = require("inquirer");
const addDepartment = require("../departments");
const addEmployee = require("../employees");
const addRole = require("../roles");
const departmentFetch = require("../departments/api");
const roleFetch = require("../roles/api");
const employeeFetch = require("../employees/api");

const start = async () => {
  // const func = () => {console.log('hello')}

  // let storage = [{
  //   newfunc: func
  // }]

  // if (storage[0]){
  //   console.log("test")
  //   storage[0].newfunc()
  // }
  try {
    const options = [
      {
        req: "view all departments",
        params: false,
        res: departmentFetch.getAllDepartments,
      },
      { req: "view all roles", params: false, res: roleFetch.getAllRoles },
      {
        req: "view all employees",
        params: false,
        res: employeeFetch.getAllEmployees,
      },
      { req: "add a department", 
        params: true, 
        res: addDepartment 
      },
      { req: "add a role", params: true, res: addRole },
      { req: "add an emplyee", params: true, res: addEmployee },
      { req: "update an emplyee role", params: true, res: 7 },
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
      const request = options[i].req;
      if (request === prompt.start) {
        // if (!options[i].params) {
        const response = await options[i].res();
        // return response;
        // } else {
        //   console.log("test")
        //   const response = await options[i].res();
        //   return response
        // }
      }
    }
  } catch (err) {
    throw error;
  }
};

module.exports = start;
