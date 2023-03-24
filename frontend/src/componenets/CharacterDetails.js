import useCharactersContext from '../hooks/useCharactersContext'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const CharacterDetails = ({ character }) => {
    const { name, img } = character
    const { dispatch } = useCharactersContext()

    const handleClick = async () => {
        const response = await fetch (`/api/characters/${ character._id }`, {
            method: 'DELETE'
        })

        const json = await response.json()
        if(response.ok) {
            dispatch({ type: 'DELETE_CHARACTER', payload: json })
        }
    }

    function arrayBufferToBase64(buffer) {
        let binary = ''
        const bytes = [].slice.call(new Uint8Array(buffer))
        bytes.forEach((b) => {
            binary += String.fromCharCode(b)
        })
        return window.btoa(binary)
    }
    console.log(name, img)
    const base64String = arrayBufferToBase64(img.data.data)
    return (
        <div className="character-details">
        <h4>{ character.name }</h4>
        <p><strong>HomeTown: </strong>{ character.hometown }</p>
        <p>{formatDistanceToNow(new Date(character.createdAt), { addSuffix: true })}</p>
        <img src = {`data:img/${img.contentType};base64,${base64String}`} alt = "character-img" className = "character-img"/>
        <span className="material-symbols-outlined" onClick={ handleClick }>delete</span>
        </div>
    )
}

export default CharacterDetails





