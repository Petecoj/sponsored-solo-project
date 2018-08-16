import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import SponsorMessageTable from '../SponsorMessageTable/SponsorMessageTable'
import ToggleAvailabilitySwitch from '../ToggleAvailabilitySwitch/ToggleAvaiabilitySwitch'
import EditProfileDialogue from '../EditProfileDialogue/EditProfileDialogue'



const mapStateToProps = state => ({
  user: state.user,
  state
});

class UserPage extends Component {
  constructor(props){
    super(props);
  this.state = {
   

  }

  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: 'GET_MESSAGES' })
    this.props.dispatch({ type: 'GET_USER_INFO'})
    
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

  profile;

  render() {
    console.log(this.props.state.currentSponsor);
    
    let content
    if (this.props.user.userName) {
      content = (
        <div style={{color: 'white'}}className ="sponsorPage">
           <button onClick={this.logout}>Log Out</button>
          <h1 id="welcome"> Welcome, { this.props.user.userName }!</h1>
          <p>Email: {this.props.state.currentSponsor.email}</p>
          <p>Phone: {this.props.state.currentSponsor.phone}</p>
          <p>City/State: {this.props.state.currentSponsor.city}</p>
          <p>Hobbies/Interests: {this.props.state.currentSponsor.hobbies}</p>
          <p>Addiction History: {this.props.state.currentSponsor.history}</p>
      
        </div>
      );
    }
  


    return (
      <div>
        <Nav />
        { content }
        <EditProfileDialogue handleClickOpen={this.handleClickOpen}
                             handleClose={this.handleClose}
                             id={this.props.user.id}
                              sponsor={this.profile}
                             
        />
        <ToggleAvailabilitySwitch messageList={this.props.state.messageList}/>
        <SponsorMessageTable messageList={this.props.state.messageList}/>
        
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

