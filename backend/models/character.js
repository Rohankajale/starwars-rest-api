const mongoose =require('mongoose')

const characterSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    hometown: {
        type: String,
        require:true
    },
    // user_id: {
    //     type: String,
    //     required: true
    // }
}, {timestamps: true})

module.exports = mongoose.model('Character', characterSchema) 