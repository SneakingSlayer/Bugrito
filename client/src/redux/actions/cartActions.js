import { ADD_TOCART, GET_CARTITEMS, DELETE_CARTITEM } from "./types";
import axios from 'axios'

const jwt = localStorage.getItem('jwt')
const header = { 
    'Content-type': 'application/json',
    'auth-token': jwt
}
export const getCartItems = () => async dispatch => {
    
   await axios.get('http://localhost:5000/api/user/cartItems', {
       headers: header
   })
    .then((res)=> dispatch({
        type: GET_CARTITEMS,
        payload: res.data
    }))
    .catch((err) => dispatch({
        type: GET_CARTITEMS,
        payload: 401
    })) 
}

export const addToCart = (item) => async dispatch => {
    await axios.post('http://localhost:5000/api/user/cart', item, {
        headers: header
    })
    .then((res) => dispatch({
        type: ADD_TOCART,
        payload: res.data
    }))
    .catch((err) => dispatch({
        type: ADD_TOCART,
        payload: err

    }))
}

export const deleteItem = (id) => async dispatch => {
    await axios.post('http://localhost:5000/api/user/removeItem', id, {
        headers: header
    })
    .then((res) => dispatch({
        type: DELETE_CARTITEM,
        payload: id
    }))
    .catch((err) => dispatch({
        type: DELETE_CARTITEM,
        payload: err
    }))
}