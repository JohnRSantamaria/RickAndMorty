import { ADD_CHARACTER, REMOVE_CHARACTER, FILTER, ORDER } from "./types";


const initialState = {
    myFavorites: [],
    allCharacters: []
}




const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CHARACTER:
            return { ...state, myFavorites: [...state.myFavorites, payload], allCharacters: [...state.myFavorites] }
        case REMOVE_CHARACTER:
            return { ...state, myFavorites: state.myFavorites.filter((idx) => idx.detailId !== payload.detailId) }
        case ORDER:
            console.log(payload);
            return {...state, allCharacters: state.allCharacters.sort((a,b)=> payload==="Asendente"?a.detailId+b.detailId:a.detailIdde-b.detailId)
            }
        case FILTER:
            return { ...state, allCharacters: state.myFavorites.filter((idx) => idx.gender === payload) }

        default:
            return { ...state }
    }

}

export default rootReducer;
