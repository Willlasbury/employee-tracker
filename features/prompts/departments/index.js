const getAllDepartments = async () => {
  try {
    const results = await fetch("http://localhost:3000/departments/", {
      method: "GET",
    });
    const json = await results.json();
    return json;
  } catch (err) {
    console.error(err);
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
// getAllDepartments().then(
// data =>
//     console.log(data)
//     )

module.exports = { getAllDepartments, getOneDepartment };
