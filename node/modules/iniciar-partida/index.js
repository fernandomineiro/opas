const express = require('express')
const router = express.Router()

/* GET ALL books */
router.post('/:salaId', require('./actions/partida'))

module.exports = router
