import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

export const useCharactersContext = () => {
    const context = useContext(CharactersContext)

    if(!context) {
        throw Error('Context tttt')
    }

    return context

}



