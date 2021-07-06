import { LOGIN_SUCCESS, LOGIN_FAIL, SET_CURRENT_USER, USER_LOGOUT } from "../actions/types";

const initialState={
    token: null,
    isAuthenticated: false,
    name: null,
    isLoading: true
}


export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem('jwt', action.payload.token)
            localStorage.setItem('name', action.payload.name)
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case LOGIN_FAIL:
            return {
                token: null,
                isAuthenticated: false,
                name: null,
                isLoading: false
            }
        case SET_CURRENT_USER:
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading:false
            }
        case USER_LOGOUT:
            localStorage.clear()
            return{
                token: null,
                isAuthenticated: false,
                name: null,
                isLoading: false
            }
        default:
            return state

    }
}