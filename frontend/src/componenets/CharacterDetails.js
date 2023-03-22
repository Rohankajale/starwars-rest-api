import useCharactersContext from '../hooks/useCharactersContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CharacterDetails = ({ character }) => {
    const { dispatch } = useCharactersContext

    const handleClick = async () => {
        const response = await fetch ('/api/characters' + character._id, {
            method: 'DELETE'
        })

        const json = await response.json()
        if(response.ok) {
            dispatch({ type: 'DELETE_CHARACTER', payload: json })
        }
    }

    return (
        <div className="character-details">
        <h4>character.name</h4>
        <p><strong>HomeTown</strong>character.hometown</p>
        <p>{formatDistanceToNow(new Date(character.createdAt), { addSuffix: true })}</p>
        <span className="material-symbols-outlined" onClick={ handleClick }>delete</span>
        </div>
    )
}

export default CharacterDetails





