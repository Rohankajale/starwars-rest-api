import { useState } from "react"
import useCharactersContext from "./useCharactersContext"

const useCreateCharacter = () => {
    const { dispatch } = useCharactersContext()

    const [error, setError] = useState()
    const [isLoading, setLoading] = useState(false)

    const createCharacter = async (name, hometown, img) => {
        setLoading(true)

        const formData = new FormData()

        formData.append('name', name)
        formData.append('hometown', hometown)
        formData.append('image', img)

        const response = await fetch('/api/characters', {
            method: 'POST',
            body: formData
        }) 

        const json = await response.json()

        setLoading(false)
        if(response.ok) {
            dispatch({ type: 'CREATE_CHARACTER', payload: json })

            return true
        }

        setError(json.error)
        return false
    }

    return { error, isLoading, createCharacter }
}

export default useCreateCharacter