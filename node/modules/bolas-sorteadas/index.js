const express = require('express')
const router = express.Router()

/* GET ALL books */
router.get('/:partidaId', require('./actions/lista'))

module.exports = router
