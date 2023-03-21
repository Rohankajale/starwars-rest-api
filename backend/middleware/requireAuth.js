const jwt = require('jsonwebtoken')
const User = require('../models/user')

const requireAuth = async function(req, res, next) {
    const authorization = req.headers

    if(!authorization) {
        res.status(401).json({error: 'Unauthorized X user'})
    }

    const token = authorization.split('')[1]
    try {
        const { _id } = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({ _id }).select('_id')
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'Auth Token :)'})
    }
}

module.exports = requireAuth
