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


import './styles/main.css';
import BrowseSponsorsPage from './components/BrowseSponsorsPage/BrowseSponsorsPage';

const App = () => (
  <div>
    <Header title="Project Base" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
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
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
