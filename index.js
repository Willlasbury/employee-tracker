const express = require("express");
const init = require('./features/prompts')
// const inq = require("inquirer");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const allRoutes = require("./features/crud");
app.use(allRoutes);

app.listen(PORT, () => {
  console.log("listening on port http://localhost:" + PORT);
})

// const init = async () => {
//   await inq.prompt([
//     {
//       type: "list",
//       name: "init",
//       message: "What would you like to do?",
//       choices: [
//         "view all departments",
//         "view all roles",
//         "view all employees",
//         "add a departments",
//         "add a role",
//         "add an emplyee",
//         "update an emplyee role",
//       ],
//     },
//   ]);
// };

init();
