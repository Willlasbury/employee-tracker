const router = require("express").Router();
let db = require("../../../db");

// query all departments from db
router.get("/", (req, res) => {
  db.query(`SELECT * FROM departments;`, (err, data) => {
    if (err) {
      return res.status(500).json({ msg: "well now", err: err });
    }
    res.json(data);
  });
});

// query department by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.query(`SELECT * FROM departments WHERE id=?;`, [id], (err, data) => {
    if (err) {
      return res.status(500).json({ msg: "well meow", err: err });
    } else res.json(data);
  });
});

// create a new department in db
router.post("/", (req, res) => {
  const newDepartment = req.body.new_department;
  db.query(
    `INSERT INTO departments (name) VALUE
    (?)`,
    [newDepartment],
    (err, data) => {
      if (err) {
        return res.status(500).json({ msg: "well meow", err: err });
      } else res.json(data);
    }
  );
});

// update department in db
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const department = req.body.department;
  db.query(
    `UPDATE departments SET name=? WHERE id=?`,
    [department, id],
    (err, data) => {
      if (err) {
        return res.status(500).json({ msg: "well meow", err: err });
      } else res.json(data);
    }
  );
});

// delete department form db
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  db.query(`DELETE FROM departments WHERE id=?`, [id], (err, data) => {
    if (err) {
      return res.status(500).json({ msg: "well meow", err: err });
    } else res.json(`You deleted: ${data.affectedRows} row/s`);
  });
});
module.exports = router;
