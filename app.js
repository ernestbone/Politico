const express = require('express')
const app = express()
const party = require('./routes/party')
const office = require('./routes/office')
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.static('public'))
app.use(express.json())
app.use('/api/v1/party', party)
app.use('/api/v1/office', office)



const port = 4000


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=>{console.log(`server is listening on ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()