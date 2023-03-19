const express = require('express')
const router = express.Router()

const {
    getCharacters,
    getCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
} = require('../controllers/characterController')

router.get('/', getCharacters)

router.get('/:id', getCharacter)

router.post('/', createCharacter)

router.patch('/:id', updateCharacter)

router.delete('/:id', deleteCharacter)


module.exports = router
