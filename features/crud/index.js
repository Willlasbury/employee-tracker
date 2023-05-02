const router = require('express').Router()

// get and use all of the routers
const departmentRoutes = require('./departments')
router.use("/departments", departmentRoutes)

const rolesRoutes = require('./roles')
router.use("/roles", rolesRoutes)

const employeesRoutes = require('./employees')
router.use("/employees", employeesRoutes)

module.exports = router