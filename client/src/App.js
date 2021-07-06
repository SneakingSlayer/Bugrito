import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/partials/Header'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import CartPage from './pages/CartPage'
import Home from './pages/Home';
import Hero from './components/Hero';
import Item from './components/Item';

import ItemPage from './pages/ItemPage'
import MenuPage from './pages/MenuPage'
import { setUser } from './redux/actions/authActions';
import {useSelector, useDispatch} from 'react-redux'
import { PrivateRoute } from './privateroutes/PrivateRoutes';

import store from './redux/store'
function App() {
  

  const dispatch = useDispatch()
  const jwt = localStorage.getItem('jwt')
  const name = localStorage.getItem('name')
  const auth = useSelector(state => state.auth)
  const CartLink ='/Cart'
  

  useEffect(() => {
    if(jwt != null){
      dispatch(setUser(jwt,name))
    }
    
  }, [])

  return (
      
    
      <Router>
        <Switch>

          <div>
          <Route component={MenuPage} path ="/Menu" />
          <PrivateRoute component={CartPage} path={CartLink} auth={auth.isAuthenticated}/>
          <Route component={RegisterPage} path="/Register"/>
          <Route component={LoginPage} path="/Login"/>
          <Route component={ItemPage}  path="/Item/:prodno"/>
          <Route component={Home} path="/" exact={true}/>
          </div>
        </Switch>
      </Router>

  );
}




export default App;
