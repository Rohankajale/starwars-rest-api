require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const characterRoutes = require('./routes/characters')
const path = require('path')
// const userRoutes = require('./routes/users')


const app = express()

app.use(express.json())

app.use(express.static(path.resolve(__dirname, 'build')));

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use('/api/characters', characterRoutes)
// app.use('/api/users', userRoutes)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Connected to Database and Connected to Port", process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })






