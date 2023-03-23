import {useState} from 'react'
import useCharactersContext from '../hooks/useCharactersContext'
import useCreateCharacter from '../hooks/useCreateCharacter'


const CharacterForm = () => {
    const {dispatch} = useCharactersContext()

    const { error, isLoading, createCharacter } = useCreateCharacter()

    const [name, setName] = useState('')
    const [hometown, setHometown] = useState('')
    const [img, setImg] = useState(null)
    const [imgPath, setImgPath] = useState('')
    // const [error, setError] = useState(null)
    const [emptyfields, setEmptyFields] = useState([])


    const handleSubmit = async (e) => {
        e.preventDefault()

        // const character = {name, hometown, img}

        // const response = await fetch('/api/characters', {
        //     method: 'POST',
        //     body: JSON.stringify(character),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        const success = createCharacter(name, hometown, img)
        // const json = await response.json()

        if(success) {
            setName('')
            setHometown('')
            setImg(null)
            setImgPath ('')
        }
        // if(!response.ok) {
        //     // setError(json.error)
        //     setEmptyFields(json.emptyfields) 
        // }
        // if(response.ok) {
        //     setEmptyFields([])
        //     // setError(null)
        //     setName('')
        //     setHometown('')
        //     setImg(null)
        //     setImgPath('')
        //     dispatch({ type: 'CREATE_CHARACTER', payload: json })
        // }
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

            <label>Upload:</label>
            <input
            type = "file"
            onChange = { (e) => { 
                setImg(e.target.files[0])
                setImgPath(e.target.value) 
            }}
            value = { imgPath }
            
            />

            <button onClick={handleSubmit} disabled = { isLoading }>Add Character</button>
            {error && <div className="error">{ error }</div>}
        </form>
    )
}


export default CharacterForm











