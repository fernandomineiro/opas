const express = require('express')
const router = express.Router()

/* GET ALL books */
router.get('/:telefone', require('./actions/central'))

module.exports = router
