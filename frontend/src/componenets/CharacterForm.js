import {useState} from 'react'
import useCharactersContext from '../hooks/useCharactersContext'

const CharacterForm = () => {
    const {dispatch} = useCharactersContext()

    const [name, setName] = useState('')
    const [hometown, setHometown] = useState('')
    const [error, setError] = useState(null)
    const [emptyfields, setEmptyFields] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault()

        const character = {name, hometown}

        const response = await fetch('/api/characters', {
            method: 'POST',
            body: JSON.stringify(character),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyfields)
        }
        if(response.ok) {
            setEmptyFields([])
            setError(null)
            setName('')
            setHometown('')
            dispatch({ type: 'CREATE_CHARACTER', payload: json })
        }
    }
    return (
        <form className="create" onSubmit={ handleSubmit }>
            <h3>Add Character</h3>

            <label>Name</label>
            <input 
            type = "text"
            onChange = { (e) => setName(e.target.value) }
            value = { name }
            className = { emptyfields.includes('name') ? error : '' }
            />

            <label>HomeTown</label>
            <input
            type = "text"
            onChange = { (e) => setHometown(e.target.value) }
            value = { hometown }
            className = { emptyfields.includes('hometown') ? error : '' }
            />

            <button onClick={handleSubmit}>Add Character</button>
            {error && <div className="error">{ error }</div>}
        </form>
    )
}


export default CharacterForm











