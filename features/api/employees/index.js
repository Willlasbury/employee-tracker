// get all employees
const getAllEmployees = async () => {
  try {
    const results = await fetch("http://localhost:3000/employees/", {
      method: "GET",
    });
    const json = await results.json();
    return json;
  } catch (err) {
    throw console.log(err);
  }
};

// get all managers (or all employees with manager_id = null)
const getAllManagers = async () => {
  try {
    const results = await fetch("http://localhost:3000/employees/managers", {
      method: "GET",
    });
    const json = await results.json();
    return json;
  } catch (err) {
    throw console.log(err);
  }
};

// get employee by id
const getOneEmployee = async () => {
  try {
    let results = await fetch(`http://localhost:3000/employees/${id}`, {
      method: "GET",
    });

    let data = await results.json();

    return data;
  } catch (err) {
    throw console.log(err);
  }
  };

// create an employee
const addEmployee = async (firstName, lastName, roleId, managerId) => {
  try {
    const newEmployee = await {
      first_name: firstName,
      last_name: lastName,
      role_id: roleId,
      manager_id: managerId,
    };

    const result = await fetch(`http://localhost:3000/employees`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee),
    });

    return result;
  } catch (err) {
    throw console.log(err);
  }
};

// update an employee's role
const updateEmployeeRole = async (id, roleId) => {
  try {
    updateBody = {
      role_id: roleId
    }
    let results = await fetch(`http://localhost:3000/employees/${id}`, {
      method: "PUT",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(updateBody)
    });

    let data = await results.json();

    return data;
  } catch (err) {
    throw console.log(err);
  }
  };

module.exports = { getAllEmployees, getOneEmployee, addEmployee, getAllManagers, updateEmployeeRole };
