const inq = require("inquirer");
const start = require("./start");

const init = async () => {
    console.log("init")
  const data = start().then((data) => console.log(data));
  return data;
};

module.exports = init;
