const express = require('express')
const {
    getCharacters,
    getCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
} = require('../controllers/characterController')

// const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// router.use(requireAuth)

router.get('/', getCharacters)

router.get('/:id', getCharacter)

router.post('/', createCharacter)

router.patch('/:id', updateCharacter)

router.delete('/:id', deleteCharacter)


module.exports = router
