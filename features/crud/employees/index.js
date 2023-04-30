const router = require('express').Router();
let db = require('../../../db')


// get all employees
router.get('/', (req, res)=>{
    db.query(`SELECT * FROM employees;`, (err, data)=>{
        if (err) {
           return res.status(500).json({msg: "well now", err:err})
        } 
            res.json(data)
       
    })
})

// get managers
router.get('/managers', (req, res)=>{
    db.query(`SELECT * FROM employees WHERE manager_id IS NULL;`, (err, data)=>{
        if (err) {
           return res.status(500).json({msg: "well now", err:err})
        } 
            res.json(data)
       
    })
})

// get one role
router.get('/:id', (req, res)=>{
    const id = req.params.id
    db.query(`SELECT * FROM employees WHERE id=?;`,[id], (err, data)=>{
        if (err) {
           return res.status(500).json({msg: "well meow", err:err})
        } else res.json(data)
       
    })
})

// create role
router.post('/', (req, res)=>{
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const roleId = req.body.role_id
    const managerId = req.body.manager_id

    db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUE
    (?, ?, ?, ?)`, [first_name, last_name, roleId, managerId], (err, data) => {
        if (err) {
            return res.status(500).json({msg: "well meow", err:err})
        } else res.json(data)
    })
})

// update role
router.put('/:id', (req, res)=>{
    const id = req.params.id;
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const roleId = req.body.role_id
    const managerId = req.body.manager_id

    db.query(`UPDATE employees SET first_name=?, last_name=?, role_id=?, manager_id=? WHERE id=?`, [first_name, last_name, roleId, managerId, id], (err, data) => {
        if (err) {
            return res.status(500).json({msg: "well meow", err:err})
        } else res.json(data)
    })
})

// delete role
router.delete('/:id', (req,res) => {
    let id = req.params.id;
    db.query( `DELETE FROM employees WHERE id=?`, [id], (err, data) => {
        if (err) {
            return res.status(500).json({msg: "well meow", err:err})
        } else res.json(`You deleted: ${data.affectedRows} row/s`)
    })
}
)


module.exports = router



