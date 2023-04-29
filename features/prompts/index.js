const inq = require("inquirer");
const start = require("./start");

const init = async () => {
  try {
    await start();
    console.log('\n')
    init()
  } catch (err) {
    throw console.log(err);
  }
};

module.exports = init;
