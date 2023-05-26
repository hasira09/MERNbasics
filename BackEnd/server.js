require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express()

//Middleware
app.use(express.json())

app.use((req, res, next)=> {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//Cnnecting to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for request
        app.listen(process.env.PORT, () => {
            console.log('DB Connected & Listening on Port', process.env.PORT)
})
    })
    .catch((error) => {
        console.log(error)
    })



process.env