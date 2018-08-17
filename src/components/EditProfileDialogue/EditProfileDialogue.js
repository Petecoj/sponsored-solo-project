import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux'
import EditProfileButton from '../EditProfileButton/EditProfileButton'

class FormDialog extends React.Component {
    constructor(props){
        super(props)
  this.state = {
    open: false,
    sponsor: {}
  };
    }
 profile = this.props.sponsor
  handleChangeFor = (propertyName) => {    
    return (event ) => {
      this.setState({
       sponsor: {
          ...this.state.sponsor,
          [propertyName] : event.target.value,
          id: this.props.id
          
        }
      })
    }
  }
  
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  submitProfile = () => {
    this.props.dispatch({
      type: 'UPDATE_PROFILE',
      payload: this.state.sponsor
    })
    this.handleClose();
  }

  render() {

      
      
    return (
      <div >
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">EDIT PROFILE</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill in every field to update your profile. 
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Email"
              fullWidth
              onChange={this.handleChangeFor("email")}
       
             
            />
            <TextField
              autoFocus
              margin="dense"
              label="Phone"
              fullWidth
              onChange={this.handleChangeFor("phone")}
            />
            <TextField
              autoFocus
              margin="dense"
              label="City"
              fullWidth
              onChange={this.handleChangeFor("city")}
            />
             <TextField
              autoFocus
              margin="dense"
              label="State"
              fullWidth
              onChange={this.handleChangeFor("state")}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Hobbies/Interests"
              fullWidth
              onChange={this.handleChangeFor("hobbies")}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Addiction History"
              fullWidth
              onChange={this.handleChangeFor("history")}
            />
              <TextField
              autoFocus
              margin="dense"
              label="Years Sober"
              fullWidth
              onChange={this.handleChangeFor("years_sober")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.submitProfile} color="primary">
              Send
            </Button>
          </DialogActions>
        </Dialog>
        <EditProfileButton handleClickOpen={this.handleClickOpen}/>
      
      </div>
    );
  }
}
const mapStateToProps = state => ({
    user:state.user,
    state: state.sponsorList
  });

export default connect(mapStateToProps)(FormDialog);
