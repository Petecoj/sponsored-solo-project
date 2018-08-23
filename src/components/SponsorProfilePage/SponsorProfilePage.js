import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import SponsorMessageTable from '../SponsorMessageTable/SponsorMessageTable';
import ToggleAvailabilitySwitch from '../ToggleAvailabilitySwitch/ToggleAvaiabilitySwitch';
import EditProfileDialogue from '../EditProfileDialogue/EditProfileDialogue';
import ImageUploader from '../ImageUploader/ImageUploader'
import EventPageForm from '../EventPageForm/EventPageForm'




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
    
    let content
    if (this.props.user.userName) {
      content = (
        <div style={{ color: 'white', marginLeft: 50,fontSize: 18}}className ="sponsorPage">
          <h1 id="welcome"> Welcome, { this.props.user.userName }!</h1>
          <p>Email: {this.props.state.currentSponsor.email}</p>
          <p>Phone: {this.props.state.currentSponsor.phone}</p>
          <p>City/State: {this.props.state.currentSponsor.city}</p>
          <p>Hobbies/Interests: {this.props.state.currentSponsor.hobbies}</p>
          <p >Addiction History: {this.props.state.currentSponsor.history}</p>
          <p>Years Sober: {this.props.state.currentSponsor.years_sober}</p>      
        </div>
      );
    }
  


    return (
      <div>
        <Nav />
        <ImageUploader type={'UPLOAD_PHOTO'}/>
        <ToggleAvailabilitySwitch messageList={this.props.state.messageList}/>

        
        <EditProfileDialogue handleClickOpen={this.handleClickOpen}
                             handleClose={this.handleClose}
                             id={this.props.user.id}
                              sponsor={this.props.state.currentSponsor}
                              
                             
        />
        
        
        <div style={{margin: '20px', float: 'right'}}>
        <img height="300px" width="auto" src={this.props.state.currentSponsor.photo}/>
        </div>
        { content }
        <SponsorMessageTable messageList={this.props.state.messageList}/>
        <EventPageForm/>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

