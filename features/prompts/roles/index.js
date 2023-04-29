const getAllRoles = async () => {
  console.log("test");
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

let data = getAllRoles().then(data=>data)
console.log("data:", data)


const getOneRole = () => {
  const func = async (id) => {
    let results = await fetch(`http://localhost:3000/roles/${id}`, {
      method: "GET",
    });

    let data = await results.json();

    return data;
  };
};

module.exports = { getAllRoles, getOneRole };
