import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/partials/Header'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import CartPage from './pages/CartPage'
import Home from './pages/Home';
import Hero from './components/Hero';
import Item from './components/Item';



function App() {
  
  return (
   
    
    <Router>
      <Switch>
        <div>
     
      <Route component={CartPage} path="/Cart"/>
        <Route component={RegisterPage} path="/Register"/>
        <Route component={LoginPage} path="/Login"/>
        <Route component={Item} path="/Item"/>
        <Route component={Home} path="/" exact={true}/>
        </div>
      </Switch>
    </Router>
  );
}




export default App;
