import { ADD_CHARACTER,REMOVE_CHARACTER, FILTER, ORDER} from "./types";

export const addCharacter = (character)=> {
    return{
        type:ADD_CHARACTER,
        payload: character
    }
}
export const removeCharacter = (id)=> {
    return{
        type:REMOVE_CHARACTER,
        payload: id
    }
}

export const filterCards= (genero)=> {
    return{
        type:FILTER,
        payload: genero
    }
}

export const orderCards = (id)=> {
    return{
        type:ORDER,
        payload: id
    }
}   