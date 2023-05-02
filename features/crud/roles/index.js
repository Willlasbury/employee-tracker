const router = require("express").Router();
let db = require("../../../db");

// query all roles
router.get("/", (req, res) => {
  db.query(`SELECT * FROM roles;`, (err, data) => {
    if (err) {
      return res.status(500).json({ msg: "well now", err: err });
    }
    res.json(data);
  });
});

// create role
router.post("/", (req, res) => {
  const title = req.body.title;
  const salary = req.body.salary;
  const deparmentId = req.body.department_id;

  db.query(
    `INSERT INTO roles (title, salary, department_id) VALUE
    (?, ?, ?)`,
    [title, salary, deparmentId],
    (err, data) => {
      if (err) {
        return res.status(500).json({ msg: "well meow", err: err });
      } else res.json(data);
    }
  );
});

// update role
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const salary = req.body.salary;
  const deparmentId = req.body.department_id;

  db.query(
    `UPDATE roles SET title=?, salary=?, department_id=? WHERE id=?`,
    [title, salary, deparmentId, id],
    (err, data) => {
      if (err) {
        return res.status(500).json({ msg: "well meow", err: err });
      } else res.json(data);
    }
  );
});

// delete role
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  db.query(`DELETE FROM roles WHERE id=?`, [id], (err, data) => {
    if (err) {
      return res.status(500).json({ msg: "well meow", err: err });
    } else res.json(`You deleted: ${data.affectedRows} row/s`);
  });
});

module.exports = router;
