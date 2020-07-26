const express = require('express')
const router = express.Router()

/* GET ALL books */
router.post('/', require('./actions/comprar'))

module.exports = router
