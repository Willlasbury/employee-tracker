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

const updateEmployee = async (firstName, lastName, roleId, managerId) => {
  try {
    let results = await fetch(`http://localhost:3000/employees/${id}`, {
      method: "PUT",
      headers: {"Content-type": "application/json"},
      body: {
        first_name: firstName,
        last_name: lastName,
        role_id: roleId,
        manager_id: managerId
      }
    });

    let data = await results.json();

    return data;
  } catch (err) {
    throw console.log(err);
  }
  };

module.exports = { getAllEmployees, getOneEmployee, addEmployee, getAllManagers, updateEmployee };
