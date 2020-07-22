const knex = require('../../../db/knex')
const getBolas = require('../../../helpers/get-bolas')

const bolas = getBolas().sort((x, y) => x-y)

const timer = (time) => new Promise((resolve, reject) => setTimeout(resolve, time))

const list = (req, res) => {
  res.json({})
}

module.exports = list