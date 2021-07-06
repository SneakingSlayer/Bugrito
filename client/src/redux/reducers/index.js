import {combineReducers} from 'redux'
import {getItemsReducer, getOneItemReducer} from './itemReducer'
import { getCartItemsReducer, addToCartReducer } from './cartReducer'
import { authReducer } from './authReducer'
export default combineReducers({
    item: getItemsReducer,
    cart: getCartItemsReducer,
    item_detail: getOneItemReducer,
    auth: authReducer

})