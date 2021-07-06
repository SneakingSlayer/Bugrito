import React from 'react'
import Header from '../components/partials/Header'
import Register from '../components/Register'
import Footer from '../components/partials/Footer'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
export default function RegisterPage() {
    const history= useHistory()
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    
    if(isAuthenticated){
        history.push('/')
        window.location.reload()
    }
    return (
        <div>
            <Header/>
            <Register/>
            <Footer/>
        </div>
    )
}
