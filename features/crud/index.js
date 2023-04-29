const router = require('express').Router()

const departmentRoutes = require('./department')
router.use("/departments", departmentRoutes)

const rolesRoutes = require('./roles')
router.use("/roles", rolesRoutes)

module.exports = router