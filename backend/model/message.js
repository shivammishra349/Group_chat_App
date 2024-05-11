let Sequelize = require('sequelize');

let sequelize = require('../database/connection')

let message = sequelize.define('messages', {
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    message:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=message