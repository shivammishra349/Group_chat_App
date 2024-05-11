let express = require('express')

let app = express()

let cors = require('cors');

app.use(
    cors()
)

app.use(express.json())

const sequelize = require('./database/connection')

const user = require('./model/user')
const message = require('./model/message')

let userRoute = require('./routes/user');
let messageRoute = require('./routes/message')
app.use(userRoute)
app.use(messageRoute)

user.hasMany(message)
message.belongsTo(user)


sequelize.sync()
    .then(()=>{
        app.listen(1234)
    })
    .catch((err)=>{
        console.log(err)
    })




