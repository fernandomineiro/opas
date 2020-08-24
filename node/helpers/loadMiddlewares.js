const middlewares = require('../middlewares')

module.exports = app => {
  for (const middleware of middlewares) {
    app.use(middleware.route, middleware.action)
  }
}
