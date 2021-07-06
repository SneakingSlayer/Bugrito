import React from 'react'
import Header from '../components/partials/Header'
import Login from '../components/Login'
import Footer from '../components/partials/Footer'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
export default function LoginPage() {
    const history= useHistory()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    if(isAuthenticated){
        history.push('/')
        window.location.reload()
    }
    return (
        <>
        <Header/>
            <Login/>
        <Footer/>
        </>
    )
}
