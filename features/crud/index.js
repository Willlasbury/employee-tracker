const router = require('express').Router()

const departmentRoutes = require('./departments')
router.use("/departments", departmentRoutes)

const rolesRoutes = require('./roles')
router.use("/roles", rolesRoutes)

const employeesRoutes = require('./employees')
router.use("/employees", employeesRoutes)

module.exports = router