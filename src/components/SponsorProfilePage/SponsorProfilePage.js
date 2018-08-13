import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import SponsorMessageTable from '../SponsorMessageTable/SponsorMessageTable'


const mapStateToProps = state => ({
  user: state.user,
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
           <button
            onClick={this.logout}
          >
            Log Out
          </button>
          <h1
            id="welcome"
          >
            Welcome, { this.props.user.userName }!
          </h1>
          
          <p>Profile Name: {this.props.user.userName}</p>
          <ul>
            <li>{this.props.user.userName}</li>
          </ul>
          <p>Email {this.props.user.email}</p>
          <p>Phone {this.props.user.phone}</p>
          <p>City/State {this.props.user.city}</p>
          <p>Hobbies/Interests{this.props.user.hobbies}</p>
          <p>AddictionHistory {this.props.user.history}</p>
          <ul>
            <li>{this.props.user.history}</li>
          </ul>
        </div>
      );
    }

    return (
      <div>
        <Nav />
        { content }
        <SponsorMessageTable />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

