const getAllRoles = async () => {
  try {
    const results = await fetch("http://localhost:3000/roles/", {
      method: "GET",
    });
    const json = await results.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

// let data = getAllRoles().then(data=>data)
// console.log("data:", data)

const getOneRole = () => {
  const func = async (id) => {
    let results = await fetch(`http://localhost:3000/roles/${id}`, {
      method: "GET",
    });

    let data = await results.json();

    return data;
  };
};

const addRole = async (title, salary, deparmentId) => {
  try {
    const newEmployee = {
      title: title,
      salary: salary,
      deparment: deparmentId,
    };

    const result = await fetch(`http://localhost:3000/roles/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee),
    });
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllRoles, getOneRole, addRole };
