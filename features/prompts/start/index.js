const inq = require("inquirer");
const departmentFetch = require('../departments')
const roleFetch = require('../roles')
const employeeFetch = require('../employees')


const start = async () => {
    try{
  const options = await [
    { req: "view all departments", res: departmentFetch.getAllDepartments()},
    { req: "view all roles", res: roleFetch.getAllRoles()},
    { req: "view all employees", res: employeeFetch.getAllEmployees() },
    { req: "add a department", res: 4 },
    { req: "add a role", res: 5 },
    { req: "add an emplyee", res: 6 },
    { req: "update an emplyee role", res: 7 },
  ];

  const promptChoices = await options.map(item => item.req);

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
      const response = await options[i].res;
      console.log("response:", response)
       const data = await response;
       return data


    }
  }} catch (err) {
    throw error
  }
};

// console.log("init():", init())
// const data = init().then(data=>console.log(data))
// console.log("data:", data)
// init().then(data=>console.log(data))

module.exports = start;
