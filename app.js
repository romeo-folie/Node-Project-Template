const express = require('express')
const bodyParser = require('body-parser')
const indexRouter = require('./routes')
require('./config/config')
require('./db/mongoose')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static('public'))

app.use('/', indexRouter)
app.use(bodyParser.json());


module.exports = app
