import React from 'react';
import logo from '../../logo.svg';


const Header = () => (
  <div className="instructions">
    <div style={{display: 'flex', alignItems: 'center', position: 'center'}}>
      <h1 style={{fontSize: 96, color: 'white'}} className="lead">Spo</h1>
      <h1 style={{fontSize: 96, color: 'white'}} className="lead">ns</h1>

      <img src={"images1.png"} className="App-logo" alt="logo"/>
      <h1 style={{fontSize: 96, color: 'white'}} className="lead">red</h1>
      <img style={{marginLeft: '50px'}} src={"images.png"} alt="logo"/>
      


      {/* <h1 style={{fontSize: 96, color: 'white'}}>ns</h1> */}
   
      {/* <h1 style={{fontSize: 96, color: 'white'}}>red</h1> */}
  
    </div>
  </div>
);

export default Header;
