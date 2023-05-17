const express = require("express");

const app = express();

const dbconfig = require('./db')
const roomsRoute = require('./routes/roomsRoute')
const usersRoute = require('./routes/usersRoute')

app.use(express.json())

app.use('/api/rooms' , roomsRoute)
app.use('/api/users' , usersRoute)


const port = process.env.PORT || 5000

app.listen(port, () => console.log('Nodemon server started'));