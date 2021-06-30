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

function App() {
  
  return (
   
    
    <Router>
      <Switch>
        <div>
        <Route component={MenuPage} path ="/Menu" />
        <Route component={CartPage} path="/Cart"/>
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
