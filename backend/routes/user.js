let express = require('express');

let routes = express.Router()

const Controller = require('../controller/user')

routes.post('/add',Controller.AddUser)

module.exports = routes