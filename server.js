import  express  from "express";
import dotenv from "dotenv";
import router from "./routes/roomsRoute.js";

import connectdb from './db.js'
import morgan from "morgan";

// configure env
dotenv.config()

//rest object
const app = express()

//calling the mongodb connection code

connectdb()

// to get all rooms

app.use(express.json())
app.use (morgan('dev'))

app.use(express.json())

app.use('/api/v1/auth',router)

const port = process.env.PORT || 5000
 app.listen(port,()=>{
    console.log('app listening on port 5000')
 });