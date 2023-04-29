const inq = require("inquirer");
const depFetch = require('../departments')

const start = async () => {
    try{
  const options = await [
    { req: "view all departments", res: 1 },
    { req: "view all roles", res: 2 },
    { req: "view all employees", res: 3 },
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
    const response = options[i].res;
    console.log("request:", request)
    if (request === prompt.start) {
       const data = await depFetch.getAllDepartments().then(data=>data);
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
