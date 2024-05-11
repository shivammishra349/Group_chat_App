let express = require('express');

let routes = express.Router()

const Controller = require('../controller/user')

routes.post('/signup',Controller.SignupUser)

routes.post('/login',Controller.LoginUser)

module.exports = routes