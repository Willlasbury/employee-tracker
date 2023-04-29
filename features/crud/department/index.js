const router = require('express').Router();
let db = require('../../../db')

router.get('/', (req, res)=>{
    res.send({"message":"success"})
})

module.exports = router



