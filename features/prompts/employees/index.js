const getAllEmployees = async () => {
    try {
      const results = await fetch("http://localhost:3000/employees/", {
        method: "GET",
      });
      const json = await results.json();
      return json;
    } catch (err) {
      console.error(err);
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
 
  
  module.exports = { getAllEmployees, getOneEmployee };
  