const { nextTick } = require("process")

const action = (req, res, next) => {
  next() 
}
module.exports = {
  route: '*',
  action
}