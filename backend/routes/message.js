let express = require('express');

let routes= express.Router()

let Authenticate = require('../middleware/auth')

let messageController = require('../controller/messages')

routes.post('/messages' ,Authenticate.authenticate, messageController.addMessage)

routes.get('/getMessage', Authenticate.authenticate,messageController.getMessage)

module.exports = routes