import React, {useState, useEffect} from 'react'
import {Navbar, Container, Dropdown, Nav} from 'react-bootstrap'
import './partials.css'
import { FaShoppingCart, FaUserCircle, FaBars, FaSignOutAlt, FaAngleDown, FaIdBadge} from 'react-icons/fa';
import {Link, useHistory, Redirect} from 'react-router-dom';
import axios from 'axios';
export default function Header(props) {
    const jwt = localStorage.getItem('jwt')
    const [state, setState] = useState();
    const [count, setCount] = useState();
    const history = useHistory()
    const user = localStorage.getItem('user')
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

        const req = axios.get('http://localhost:5000/api/user/cartItems', {
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
        <Navbar collapseOnSelect expand="lg" >
        <Container className="nav-cont">
        <Navbar.Brand className="navbrand"><a href='/'>Bugrito's</a></Navbar.Brand>
        <div className="d-flex flex-row align-items-center">
            {
                state? <Nav.Link href="/Cart" className="cart-icon-outside">{badge(props.cartcount, count)}<FaShoppingCart/> &nbsp;<span className="item-st">Cart</span></Nav.Link> : <Nav.Link href="/Login" className="login-show"><li className="list-item"><button className="btn-sign">Sign In</button></li></Nav.Link>
            }
    {/**  <Nav.Link href="/Cart" className="cart-icon-outside">{badge(props.cartcount, count)}<FaShoppingCart/> &nbsp;<span className="item-st">Cart</span></Nav.Link>*/}  
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
                    <button className="item-st drop-user-show" onClick={logOut}>Sign Out</button>
                    <Dropdown className="drop-user">
                        <Dropdown.Toggle id="dropdown-basic">
                            <FaUserCircle/> &nbsp;<span className="item-st">{user}</span> &nbsp;<FaAngleDown size={18}/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item><a className="item-st"><FaUserCircle/> &nbsp;&nbsp;My Account</a></Dropdown.Item>
                            <button className="item-st" onClick={logOut}><Dropdown.Item><FaSignOutAlt/> &nbsp;&nbsp;Sign Out</Dropdown.Item></button>
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




    /*   <div className="header-section">
            <nav className="header-nav">
                <div className="d-flex-row align-items-center">
                    <div className="navbrand">
                        <a href='/'>Bugrito's</a>
                    </div>  
                    <ul className="nav-list">
                        <li className="list-item"><Link to="/" className="item-st">Home</Link></li>
                        <li className="list-item"><Link to="/Menu" className="item-st">Menu</Link></li>
                    </ul>

                </div>
                
              
                <div className="nav-actions collapse">
                    <ul className="nav-list">
                        
                        <li className="list-item">{badge(props.cartcount, count)}<Link to="/Cart"><FaShoppingCart/> &nbsp;<span className="item-st">Cart</span> </Link></li>
                        { 
                        state? <li className="list-item">
                        <input type="checkbox" id="prof-drop"/>
                        <label className="prof-sec" for="prof-drop">
                            <a><FaUserCircle/> &nbsp;<span className="item-st">{user}</span> &nbsp;<FaAngleDown size={18}/></a>
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
    
        







        </div>*/





                        















    )
}
