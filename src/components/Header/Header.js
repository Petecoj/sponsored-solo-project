import React from 'react';
import logo from '../../logo.svg';


const Header = () => (
  <div className="instructions">
    <div style={{display: 'flex', alignItems: 'center'}}>
      <h1 style={{fontSize: 96, color: 'white'}} className="lead">Sp</h1>
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 style={{fontSize: 96, color: 'white'}}>ns</h1>
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 style={{fontSize: 96, color: 'white'}}>red</h1>
  
    </div>
  </div>
);

export default Header;
