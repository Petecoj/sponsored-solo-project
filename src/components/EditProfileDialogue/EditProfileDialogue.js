import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import EditProfileButton from '../EditProfileButton/EditProfileButton';
import 'react-toastify/dist/ReactToastify.css';


const mapStateToProps = state => ({
  user: state.user,
  state,
});


class FormDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      sponsor: {
        email: '',
        phone: '',
        city: '',
        state: '',
        hobbies: '',
        history: '',
        years_sober: '',
      },
    };
  }

  handleChangeFor = (propertyName) => {
    const { sponsor } = this.state;
    const { id } = this.props;
    return (event) => {
      this.setState({
        sponsor: {
          ...sponsor,
          [propertyName]: event.target.value,
          id,

        },
      });
    };
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submitProfile = () => {
    const { dispatch } = this.props;
    const { sponsor } = this.state;
    dispatch({
      type: 'UPDATE_PROFILE',
      payload: sponsor,
    });
    this.handleClose();
    toast.success('Profile Updated!');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps.state.currentSponsor);
    this.setState({
      sponsor: { ...nextProps.state.currentSponsor },
    });
  }

  render() {
    const { open } = this.state;
    const { sponsor } = this.state;
    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">EDIT PROFILE</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Update your profile!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Email"
              fullWidth
              onChange={this.handleChangeFor('email')}
              value={sponsor.email}

            />
            <TextField
              autoFocus
              margin="dense"
              label="Phone"
              fullWidth
              onChange={this.handleChangeFor('phone')}
              defaultValue={sponsor.phone}
            />
            <TextField
              autoFocus
              margin="dense"
              label="City"
              fullWidth
              defaultValue={sponsor.city}
              onChange={this.handleChangeFor('city')}
            />
            <TextField
              autoFocus
              margin="dense"
              label="State"
              fullWidth
              defaultValue={sponsor.state}
              onChange={this.handleChangeFor('state')}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Hobbies/Interests"
              fullWidth
              defaultValue={sponsor.hobbies}
              onChange={this.handleChangeFor('hobbies')}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Addiction History"
              fullWidth
              defaultValue={sponsor.history}
              onChange={this.handleChangeFor('history')}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Years Sober"
              fullWidth
              defaultValue={sponsor.years_sober}
              onChange={this.handleChangeFor('years_sober')}

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
        <EditProfileButton handleClickOpen={this.handleClickOpen} />
        <ToastContainer
          hideProgressBar
          autoClose={3000}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(FormDialog);
