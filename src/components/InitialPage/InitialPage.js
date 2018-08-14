import React, { Component } from 'react';
import Header from '../Header/Header'
import { Link } from 'react-router-dom';



class InitialPage extends Component {

browseSponsorsClick = ()=>{
    window.location.href= `/#/browse`;

}

  render() {
  
    return (
    <div>
        <div>
                <Header/>
        </div>
        <div>
        <ul>
            <li>
                <Link className="link" to="/login">
                Sponsor Login
                </Link>
            </li>
            <li>
                <Link className="link" to="/register">
                 Register
                </Link>
            </li>
        </ul>
        <button onClick={this.browseSponsorsClick}>Browse Sponsors</button>
        </div>
    </div>
    );
  }
}

export default InitialPage;
