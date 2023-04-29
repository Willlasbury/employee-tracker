const router = require('express').Router();
let db = require('../../../db')

router.get('/', (req, res)=>{
    db.query(`SELECT * FROM departments;`, (err, data)=>{
        console.log("data:", data)
        if (err) {
           return res.status(500).json({msg: "well now", err:err})
        } 
            // console.log("data:", data)
            res.send(data)
       
    })
})

module.exports = router



