const express = require('express')
const router = express.Router()

/* GET ALL books */
router.post('/', require('./actions/sortear-bola'))

module.exports = router
