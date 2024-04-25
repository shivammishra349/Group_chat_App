let Sequelize = require('sequelize')

let sequelize  = new Sequelize('chat_app','root','shivam12',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;