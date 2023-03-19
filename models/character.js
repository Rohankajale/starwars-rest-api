const mongoose =require('mongoose')

const characterSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    hometown: {
        type: String,
        require:true
    }
}, {timestamps: true})

module.exports = mongoose.model('Character', characterSchema) 