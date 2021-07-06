import { GET_ITEMS, GET_ONEITEM } from "./types";
import axios from 'axios'

export const getItems = () => async dispatch => {
    await axios.get('/api/user/allProducts')
    .then((res)=> dispatch({
        type: GET_ITEMS,
        payload: res.data
    }))
    .catch((err) => {
    }) 
}

export const getOneItem = (id) => async dispatch => {
    await axios.get(`/api/user/getProduct/${id}`)
    .then((res) => dispatch({
        type: GET_ONEITEM,
        payload: res.data
    }))
    .catch((err) => dispatch({
        type: GET_ONEITEM,
        payload: 404
    }))

}