const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    hometown: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String,
    }
    // user_id: {
    //     type: String,
    //     required: true
    // }
}, {timestamps: true})

module.exports = mongoose.model('Character', characterSchema) 