import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../NavBar/NavBar';
import EventListPage from '../EventListPage/EventListPage';

const mapStateToProps = state => ({
  user: state.user,
});

class InfoPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <EventListPage />
      </div>
    );
  }
}


export default connect(mapStateToProps)(InfoPage);
