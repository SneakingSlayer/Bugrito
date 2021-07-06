import { LOGIN_SUCCESS, LOGIN_FAIL, SET_CURRENT_USER, USER_LOGOUT } from './types'
import axios from 'axios'


export const login = (userInfo) => async dispatch => {
    await axios.post('/api/user/login', userInfo)
    .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch(err => dispatch({
        type: LOGIN_FAIL
    }))
}


export const setUser = (token, name) => dispatch => {

    dispatch({
        type: SET_CURRENT_USER,
        payload: {token: token, name: name}
    })
}

export const logOut = () => dispatch => {
    dispatch({
        type: USER_LOGOUT
    })
    
}
 
