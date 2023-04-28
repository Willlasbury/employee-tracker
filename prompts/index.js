const inq = require("inquirer");

const init = async () => {
   await inq.prompt([
        {
            type: "list",
            name: "init",
            message: "What would you like to do?",
            choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a departments",
                "add a role",
                "add an emplyee",
                "update an emplyee role"
            ]

        }
    ])
}

init()