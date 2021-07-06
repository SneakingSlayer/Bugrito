import { GET_CARTITEMS, ADD_TOCART, DELETE_CARTITEM } from "../actions/types"
const initialState = {
    items: []
}

export const getCartItemsReducer = (state = {items: {}}, action) => {
    switch(action.type){
        case GET_CARTITEMS:
            return {
                ...state,
                items: action.payload
            }
        case ADD_TOCART:
            return{
                ...state,
                items: [action.payload, ...state.items]
            }
        case DELETE_CARTITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload._id)
            }
        default:
            return state
    }
}

/**export const addToCartReducer = (state = {items: {}}, action) => {
    switch(action.type){
        case ADD_TOCART:
            return{
                ...state,
                items: [action.payload, ...state.items]
            }
        default:
            return state
    }
}*/