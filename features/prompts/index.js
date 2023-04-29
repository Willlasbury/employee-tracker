const inq = require("inquirer");
const start = require("./start");

const init = async () => {
  try {
    await start().then((data) => console.log(data));
  } catch (err) {
    throw err;
  }
};

module.exports = init;
