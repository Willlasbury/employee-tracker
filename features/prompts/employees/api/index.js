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
  
  const getOneEmployee = () => {
    const func = async (id) => {
      let results = await fetch(`http://localhost:3000/employees/${id}`, {
        method: "GET",
      });
  
      let data = await results.json();
  
      return data;
    };
  };
 

const addEmployee = async (firstName, lastName, roleId, managerId) => {
  try {
    const newEmployee = {
      first_name: firstName,
      last_name: lastName,
      role_id: roleId,
      manager_id: managerId
    }

    const result = await fetch(`http://localhost:3000/employees/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee)
    });
    
    console.log(`You have add ${firstName} ${lastName} to your employee list.`)
  } catch (err) {
    throw console.log(err);
  }
}

  module.exports = { getAllEmployees, getOneEmployee, addEmployee };
  