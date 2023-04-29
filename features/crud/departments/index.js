const router = require('express').Router();
let db = require('../../../db')


// get all departments
router.get('/', (req, res)=>{
    db.query(`SELECT * FROM departments;`, (err, data)=>{
        console.log("data:", data)
        if (err) {
           return res.status(500).json({msg: "well now", err:err})
        } 
            // console.log("data:", data)
            res.json(data)
       
    })
})

// get one department
router.get('/:id', (req, res)=>{
    const id = req.params.id
    db.query(`SELECT * FROM departments WHERE id=?;`,[id], (err, data)=>{
        console.log("data:", data)
        if (err) {
           return res.status(500).json({msg: "well meow", err:err})
        } else res.json(data)
       
    })
})

// create department
router.post('/', (req, res)=>{
    const newDepartment = req.body.new_department
    db.query(`INSERT INTO departments (name) VALUE
    (?)`, [newDepartment], (err, data) => {
        if (err) {
            return res.status(500).json({msg: "well meow", err:err})
        } else res.json(data)
    })
})

// update department
router.put('/:id', (req, res)=>{
    const id = req.params.id;
    const department = req.body.department;
    db.query(`UPDATE departments SET name=? WHERE id=?`, [department, id], (err, data) => {
        if (err) {
            return res.status(500).json({msg: "well meow", err:err})
        } else res.json(data)
    })
})

// delete department
router.delete('/:id', (req,res) => {
    let id = req.params.id;
    db.query( `DELETE FROM departments WHERE id=?`, [id], (err, data) => {
        if (err) {
            return res.status(500).json({msg: "well meow", err:err})
        } else res.json(`You deleted: ${data.affectedRows} row/s`)
    })
}
)
module.exports = router



