const inq = require("inquirer");
const start = require("./init")


const init = async () => {

    const data = start().then(data=>console.log(data))
    return data

}


module.exports = init;
