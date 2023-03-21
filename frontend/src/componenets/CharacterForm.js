import useState from 'react'
import useCharactersContext from './hooks/useCharactersContext'

const CharacterForm = () => {
    const dispatch = useCharactersContext()

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
            dispatch({ type: CREATE_CHARAACTER, payload: json })
        }
    }
    return (
        <form>
            <h3>Add Character</h3>

            <input 
            type = "text"
            onChange = { (e) => setName(e.target.value) }
            value = { name }
            className = { emptyfields.include('name') ? error : '' }
            />

            <input
            type = "text"
            onChange = { (e) => setHometown(e.target.value) }
            value = { hometown }
            className = { emptyfields.include('hometown') ? error : '' }
            />

            <button>Add Character</button>
            {error && <div className="error">{ error }</div>}
        </form>
    )
}


export default CharacterForm











