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
import InitialPage from './components/InitialPage/InitialPage';
import './styles/main.css';
import BrowseSponsorsPage from './components/BrowseSponsorsPage/BrowseSponsorsPage';
import EventsPage from './components/EventsPage/EventsPage';

const divStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: 'url(https://res.cloudinary.com/dftsayunq/image/upload/v1539363749/IMG_2054_ioryug.jpg)',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  margin: 0,
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
          path="/events"
          component={EventsPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>

  </div>
);

export default App;
