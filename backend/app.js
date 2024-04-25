let express = require('express')

let app = express()

let cors = require('cors');

app.use(cors())

app.use(express.json())

const sequelize = require('./database/connection')

const user = require('./model/user')

let userRoute = require('./routes/user');
app.use(userRoute)


sequelize.sync()
    .then(()=>{
        app.listen(1234)
    })
    .catch((err)=>{
        console.log(err)
    })




