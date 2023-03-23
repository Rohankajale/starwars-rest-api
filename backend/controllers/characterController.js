const Character = require('../models/character')
const mongoose = require('mongoose')
const fs = require('fs')

const getCharacters = async(req, res) => {
    // const user_id = req.user._id
    // const characters = await Character.find({ user_id }).sort({createdAt: -1})
    const characters = await Character.find({}).sort({createdAt: -1})
    res.status(200).json(characters)
}

const getCharacter = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such character'})
    }

    const character = await Character.findById(id)

    if(!character){
        return res.status(404).json({error: 'No such character'})
    }

    res.status(200).json(character)
}

const createCharacter = async(req, res) => {
    const characterObj = {
        name: req.body.name,
        hometown: req.body.hometown,
        img: {
            data: fs.readFileSync('./uploads/' + req.file.filename),
            contentType: 'image/jpg'
        }
    }

    const character = await Character.create(characterObj)

    if(character) {
       res.status(200).json(character)
    }
    else {
        res.status(400).json({ error: 'Fields {X}' })
    }
    fs.rmSync(('./uploads/' + req.file.filename))

    
    // let emptyFields = []

    // if(!name) {
    //     emptyFields.push('name')
    // }

    // if(!hometown) {
    //     emptyFields.push('hometown')
    // }

    // if(emptyFields.length > 0) {
    //     return res.status(400).json({error: 'Fields :)'})
    // }

    // try {
    //     // const user_id = req.user._id
    //     // const character = await Character.create({ name, hometown, user_id })
    //     const character = await Character.create({ name, hometown })
    //     res.status(200).json(character)
    // } catch (error) {
    //     res.status(400).json({error: error.message})
    // }


}

const updateCharacter = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Object not found'})
    }

    const character = await Character.findOneAndUpdate({_id: id},{
        ...req.body
    })

    if(!character) {
        return res.status(404).json({error: 'Character not found'})
    }

    res.status(200).json(character)
}

const deleteCharacter = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Object not found'})
    }

    const character = await Character.findOneAndDelete({_id: id})

    if(!character) {
        return res.status(404).json({error: 'Character not found'})
    }

    res.status(200).json(character)
}

module.exports = {
    getCharacter,
    getCharacters,
    createCharacter,
    updateCharacter,
    deleteCharacter
}




