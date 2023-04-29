const inq = require("inquirer");


const init = async () => {
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
      name: "init",
      message: "What would you like to do?",
      choices: promptChoices,
    },
  ]);

  for (let i = 0; i < options.length; i++) {
    const request = options[i].req;
    const response = options[i].res;
    if (request === prompt.init) {
      return console.log(response);
    }
  }
};

module.exports = init;
