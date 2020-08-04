var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const loadModules = require('./helpers/loadModules')
const loadMiddleware = require('./helpers/loadMiddlewares')
const knex = require('./db/knex')
knex('membro').update({sala_id: 0, partida_id: null})
var app = express()
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(helmet())

// Load Middlewares
loadMiddleware(app)

// Load all Modules
loadModules(app)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  // res.render('error')
  res.send(`Error - ${res.statusCode}`)
})

module.exports = app