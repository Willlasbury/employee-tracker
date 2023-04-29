const router = require('express').Router()

const departmentRoutes = require('./department')
router.use("/departments", departmentRoutes)

module.exports = router