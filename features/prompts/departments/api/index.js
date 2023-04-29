const getAllDepartments = async () => {
  try {
    const results = await fetch("http://localhost:3000/departments/", {
      method: "GET",
    });
    const json = await results.json();
    return json;
  } catch (err) {
    throw console.log(err);
  }
};

const getOneDepartment = () => {
  const func = async (id) => {
    let results = await fetch(`http://localhost:3000/departments/${id}`, {
      method: "GET",
    });

    let data = await results.json();

    return data;
  };
};

const addDepartment = async (name) => {
  try {
    const newDepartment = {
      new_department: name,
    };

    const result = await fetch(`http://localhost:3000/departments/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newDepartment),
    });

    return result
    
  } catch (err) {
    throw console.log(err);
  }
};

module.exports = { getAllDepartments, getOneDepartment, addDepartment };
