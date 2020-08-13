const express = require('express')
const router = express.Router()

/* GET ALL books */
router.get('/:telefone', require('./actions/saldo'))

module.exports = router
