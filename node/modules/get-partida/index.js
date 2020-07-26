const express = require('express')
const router = express.Router()

/* GET ALL books */
router.get('/:salaId', require('./actions/partida'))

module.exports = router
