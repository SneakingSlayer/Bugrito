import React, { useEffect} from 'react'
import {Navbar, Container, Dropdown, Nav} from 'react-bootstrap'
import './partials.css'
import { FaShoppingCart, FaUserCircle, FaSignOutAlt, FaAngleDown} from 'react-icons/fa';
import {useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import {getCartItems} from '../../redux/actions/cartActions'
import { logOut } from '../../redux/actions/authActions';
export default function Header(props) {
    const jwt = localStorage.getItem('jwt')
    const dispatch = useDispatch()
    const history = useHistory()
    const items = useSelector(state => state.cart)
    const auth = useSelector(state => state.auth)
    const user = localStorage.getItem('name')
    const itemArr = items.items
    const count = itemArr.length
    let state;
    
    function badge(propsCount, rcount) {
        if (jwt === null){
            return
        }
        else{
            return  <span className="badge">{updateCart()}</span>
        }
    }

    if(auth.isAuthenticated){
        state = true
    }
    else{
        state = false
    }
    
    function updateCart(){
        if(props.cartcount === undefined){
            return count
        }
        else{
            return props.cartcount
        }
    }

    function clear(){

        dispatch(logOut())
        history.push('/')
        window.location.reload()
    }

    useEffect(() => {
        dispatch(getCartItems())
    }, [])



    return (
        <Navbar collapseOnSelect expand="lg" >
        <Container className="nav-cont">
        <Navbar.Brand className="navbrand"><a href='/'>Bugrito's</a></Navbar.Brand>
        <div className="d-flex flex-row align-items-center">
            {
                state? <Nav.Link href="/Cart" className="cart-icon-outside">{badge(props.cartcount, count)}<FaShoppingCart/> &nbsp;<span className="item-st">Cart</span></Nav.Link> : <Nav.Link href="/Login" className="login-show"><li className="list-item"><button className="btn-sign">Sign In</button></li></Nav.Link>
            }
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="item-st" href="/">Home</Nav.Link>
            <Nav.Link className="item-st" href="/Menu">Menu</Nav.Link>
            
          </Nav>
          <Nav className="ml-auto">
          
            <Nav.Link href="/Cart" className="cart-icon">{badge(props.cartcount, count)}<FaShoppingCart/> &nbsp;<span className="item-st">Cart</span></Nav.Link>
            {
                state? 
                
                <Nav.Link className="list-item dus">
                    <button className="item-st drop-user-show item-st-btn" onClick={e=> {e.preventDefault(); clear()}}>Sign Out</button>
                    <Dropdown className="drop-user">
                        <Dropdown.Toggle id="dropdown-basic">
                            <FaUserCircle/> &nbsp;<span className="item-st">{user}</span> &nbsp;<FaAngleDown size={18}/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item><a className="item-st"><FaUserCircle/> &nbsp;&nbsp;My Account</a></Dropdown.Item>
                            <button className="item-st item-st-btn" onClick={e=> {e.preventDefault(); clear()}}><Dropdown.Item><FaSignOutAlt/> &nbsp;&nbsp;Sign Out</Dropdown.Item></button>
                        </Dropdown.Menu>

                    </Dropdown>
                </Nav.Link>
                :

                <Nav.Link className="sign-in-a" href="/Login">
                    <li className="list-item"><button className="btn-sign">Sign In</button></li> 
                </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
