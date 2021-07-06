import React from 'react'
import { Route, Redirect, useLocation, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux'

export function PrivateRoute(props) {
    const auth = useSelector(state => state.auth)
    const location = useLocation();
    const history = useHistory();
    const jwt = localStorage.getItem('jwt')
    console.log(props.auth)
    const setRoute = () => {
        if(location.pathname === '/Cart' && (jwt === null || jwt === false)){
            history.push("/Login")
            window.location.reload()
        }
        else{
            return <Route component={props.component} path={props.path}/> 
        }
    }
    return (
      setRoute()
    )
}
