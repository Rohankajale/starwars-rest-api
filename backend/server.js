require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const characterRoutes = require('./routes/characters')
const userRoutes = require('./routes/users')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/characters', characterRoutes)
app.use('/api/users', userRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to Database and Connected to Port", process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })






