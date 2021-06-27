import React from 'react'
import Header from '../components/partials/Header'
import Cart from '../components/Cart'
import Footer from '../components/partials/Footer'
import {useHistory} from 'react-router-dom'
export default function CartPage() {
    const history = useHistory();
    const jwt = localStorage.getItem('jwt')
    if(jwt === null){
        history.push('/Login')

    }

    return (
        <div>
    
            <Cart/>
            <Footer/>
        </div>
    )
}
