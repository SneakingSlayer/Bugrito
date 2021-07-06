import { GET_ITEMS, GET_ONEITEM } from "../actions/types"
const initialState = {
    items: []
}

export const getItemsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload
            }
       
        default:
            return state
    }
}

export const getOneItemReducer = (state = {item: {}}, action) => {
    switch(action.type){
        case GET_ONEITEM:
            return{
                ...state, 
                item: action.payload
            }
        default:
            return state
    }
}