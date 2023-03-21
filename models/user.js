const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


userSchema.statics.signup = async function(email, password) {
    if(!email || ! password) {
        throw Error('Fields XD')
    }

    if(!validator.isEmail(email)) {
        throw Error('Email {X}')
    }
    if(!validator.isStrongPassword(password)) {
        throw Error('Password {X}')
    }

    const exists = await this.findOne({ email })

    if(exists) {
        throw Error('Email {X}')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({email, password: hash})

    return user
}

userSchema.statics.login = async function(email, password) {
    if(!email || !password) {
        throw Error('Fields XD')
    }

    const user = await this.findOne({ email })

    if(!user) {
        throw Error('Nooo Validity')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error('Passwod {X}')
    }

    return user
}


module.exports = mongoose.model('User', userSchema)
