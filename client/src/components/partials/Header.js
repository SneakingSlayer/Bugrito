import React, {useState, useEffect} from 'react'
import Button from '../Button'
import './partials.css'
import { FaShoppingCart, FaUserCircle, FaBars, FaSignOutAlt, FaAngleDown, FaIdBadge} from 'react-icons/fa';
import {Link, useHistory, Redirect} from 'react-router-dom';
import axios from 'axios';
export default function Header(props) {
    const jwt = localStorage.getItem('jwt')
    const [state, setState] = useState();
    const [count, setCount] = useState();
    const history = useHistory()

    const header = { 
        'Content-type': 'application/json',
        'auth-token': jwt
    }

   

    function badge(propsCount, rcount) {
        
        if (jwt === null){
            return
        }

        if(propsCount === 0){
           
            return
        }
        

        if (propsCount > 0 || rcount > 0) {
            return  <span className="badge">{updateCart()}</span>
        }
        
    }
    

    useEffect(() => {
        if(jwt){
            setState(true)
        }
        else{
           setState(false)
        }

        const req = axios.get('/api/user/cartItems', {
            headers: header
        })
        .then((res) => {
         const cartItems = res.data
         setCount(cartItems.length)
        })
        .catch((err) => {
            return
        })

    }, [jwt])

  

    
    function updateCart(){
        if(props.cartcount === undefined){
            return count
        }
        else{
            return props.cartcount
        }
    }

    async function logOut(){
       await localStorage.clear();
       history.push('/')

    }


    return (
















        <div className="header-section">
            <nav className="header-nav">
                <div className="d-flex-row align-items-center">
                    <div className="navbrand">
                        <a href='/'>Bugrito's</a>
                    </div>  
                    <ul className="nav-list">
                        <li className="list-item"><a className="item-st">Home</a></li>
                        <li className="list-item"><a className="item-st">Menu</a></li>
                        <li className="list-item"><a className="item-st">Contact</a></li>
                    </ul>

                </div>
                
              {/* <div className="nav-options">
                    <ul className="nav-list">
                        <li className="list-item">Men</li>
                        <li className="list-item">Women</li>
                        <li className="list-item">Kids</li>
                        <li className="list-item">Sale</li>
                    </ul>
                </div>*/} 
                <div className="nav-actions collapse">
                    <ul className="nav-list">
                        
                        <li className="list-item">{badge(props.cartcount, count)}<Link to="/Cart"><FaShoppingCart/> &nbsp;<span className="item-st">Cart</span> </Link></li>
                        { 
                        state? <li className="list-item">
                        <input type="checkbox" id="prof-drop"/>
                        <label className="prof-sec" for="prof-drop">
                            <a><FaUserCircle/> &nbsp;<span className="item-st">Account</span> &nbsp;<FaAngleDown size={18}/></a>
                        </label> 
                        <div className="dropdown">
                            <ul className="nav-list-drop">
                                <li className="list-item-drop"><a className="item-st"><FaUserCircle/> &nbsp;&nbsp;My Account</a></li>
                                <li className="list-item-drop"><button className="item-st" onClick={logOut}><FaSignOutAlt/> &nbsp;&nbsp;Sign Out</button></li>
                            </ul>
                        </div>
                        
                        </li>: 
                        <Link className="sign-in-a" to="/Login">
                            <li className="list-item"><button className="btn-sign">Sign In</button></li> 
                        </Link>
                        
                        }
                        
                       
                        {/*<li className="list-item"><Button label="Register"/></li>*/}
                        
                    </ul>
                </div>
                <div className="nav-actions toggle">
                    <ul className="nav-list">
                        <li className="list-item">
                            <button className="btn-menu"><FaBars/></button>
                        </li>
                    </ul>
                    

                </div>
            </nav>
           {/*
            <input type="checkbox" id="prof-drop" className="prof-drop" />
            <label for="prof-drop">
                <a><FaUserCircle/> &nbsp;<span className="item-st">Account</span> &nbsp;<FaAngleDown size={18}/></a>
            </label>*/}             
            
        







        </div>





                        















    )
}
