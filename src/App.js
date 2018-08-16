import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import SponsorProfilePage from './components/SponsorProfilePage/SponsorProfilePage';
import InfoPage from './components/InfoPage/InfoPage';
import InitialPage from './components/InitialPage/InitialPage'
import CreateSponsorProfilePage from './components/CreateSponsorProfilePage/CreateSponsorProfilePage'


import './styles/main.css';
import BrowseSponsorsPage from './components/BrowseSponsorsPage/BrowseSponsorsPage';

const divStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${'IMG_2054.jpg'})`,
  backgroundSize: 'cover' 
  
};

const App = () => (
  <div style={divStyle}>
    <Header title="Sponsored" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={InitialPage}
        />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={SponsorProfilePage}
        />
        <Route
          path="/info"
          component={InfoPage}
        />
          <Route
          path="/browse"
          component={BrowseSponsorsPage}
        />
         <Route
          path="/create_profile"
          component={CreateSponsorProfilePage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>

  </div>
);

export default App;
