const departmentRoutes = require('../../crud/departments');
const inq = require('inquirer')

const getAllDepartments = async () => {
    try{
    const results = await fetch('http://localhost:3000/departments/', {
        method: 'GET'
    })
    const json = await results.json()
    return json
} catch (err) {
    console.error(err);
}
}

const getOneDepartment = async (id) => {
        let results = await fetch(`http://localhost:3000/departments/${id}`, {
                method: 'GET'
            })
        
            let data = await results.json()
        
            return data
        }

// getAllDepartments().then(
// data =>
//     console.log(data)
//     )

module.exports = {getAllDepartments, getOneDepartment}