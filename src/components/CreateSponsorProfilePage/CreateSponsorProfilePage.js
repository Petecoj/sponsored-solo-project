import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { fetchUser } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


class CreateSponsorProfilePage extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {

    return (
      <div>
        <Nav />
      </div>
    );
  }
}


export default connect(mapStateToProps)(CreateSponsorProfilePage);

