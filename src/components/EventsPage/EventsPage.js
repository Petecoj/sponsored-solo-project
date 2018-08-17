import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventListPage from '../EventListPage/EventListPage'
import EventPageForm from '../EventPageForm/EventPageForm'
import NavBar from '../../components/NavBar/NavBar';

const mapStateToProps = state => ({
  user: state.user,
});

class InfoPage extends Component {


  render() {

    return (
      <div>
        <NavBar />
        <EventPageForm/>
        <EventListPage/>
       
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);
