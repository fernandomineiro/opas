const express = require('express')
const router = express.Router()

/* GET ALL books */
router.post('/:sala_id', require('./actions/partida'))

module.exports = router