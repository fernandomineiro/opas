const express = require('express')
const router = express.Router()

/* GET ALL books */
router.put('/', require('./actions/registrar-sala'))

module.exports = router
