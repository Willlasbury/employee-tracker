const getAllRoles = async () => {
  try {
    const results = await fetch("http://localhost:3000/roles/", {
      method: "GET",
    });
    const json = await results.json();
    return json;
  } catch (err) {
    throw console.log(err);
  }
};

const getAllRoleTitles = async () => {
  try {
    const results = await fetch("http://localhost:3000/roles/titles", {
      method: "GET",
    });
    const json = await results.json();
    return json;
  } catch (err) {
    throw console.log(err);
  }
};

const getOneRole = async () => {
  try {
    let results = await fetch(`http://localhost:3000/roles/${id}`, {
      method: "GET",
    });

    let data = await results.json();

    return data;
  } catch (err) {
    throw console.log(err);
  }
  };


const addRole = async (title, salary, deparmentId) => {
  try {
    const newEmployee = {
      title: title,
      salary: salary,
      department_id: deparmentId,
    };

    const result = await fetch(`http://localhost:3000/roles/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee),
    });
    return result
  } catch (err) {
    throw console.log(err);
  }
};

module.exports = { getAllRoles, getOneRole, addRole, getAllRoleTitles };
