const inq = require("inquirer");
const start = require("./start");

// create funciton to initialize the application.
// it also creates a new line everytime the user loops through the function
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
