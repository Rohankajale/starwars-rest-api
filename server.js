require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const characterRoutes = require('./routes/characters')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/characters', characterRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to Databse')

        app.listen(process.env.PORT, () => {
            console.log("Connected to Port", process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })






