import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <div className='nav-bar'>
      <h1>Welcome to the Bubble App!</h1>
      <nav>
        <NavLink className='nav-link' to='/'>Login</NavLink>
        <NavLink className='nav-link' to='/bubbles'>Bubbles</NavLink>
      </nav>
    
    <Switch>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact  path='/bubbles' component={BubblePage}/>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Switch>
    </div>
  );
}

export default App;
