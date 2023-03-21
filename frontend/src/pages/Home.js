import { useEffect } from "react"
import useCharactersContext from './hooks/useCharactersContext'

import CharacterForm from "../componenets/CharacterForm"
import CharacterDetails from "../componenets/CharacterDetails"

const Home = () => {
    const { characters, dispatch } = useCharactersContext

    useEffect(() => {
        const fetchCharacters = async() => {
            const response= await fetch('/api/characters')
            const json = await response.json()

            if(response.ok) {
                dispatch({ type: SET_CHARACTER, payload:json })
            }
        }

        fetchCharacters()
    }, [dispatch])

    return (
        <div className = "home">
            <div className = "characters">
                {characters && characters.map(character => (
                    <CharacterDetails character = { character } key = { character._id } />
                ))}
            </div>
            <CharacterForm />
        </div>
    )
}






export default Home