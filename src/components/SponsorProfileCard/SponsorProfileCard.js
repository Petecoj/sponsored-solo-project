import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextsmsIcon from '@material-ui/icons/Textsms';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const styles = theme => ({
  card: {
    width: 225,
    // maxWidth: 200,
    margin: 25,
    background: 'rgba(255,255,255,0.5)',
  },
  media: {
    paddingTop: '86.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  Typography: {
  htmlFontSize: 30,
  },
});

class SponsorProfileCard extends React.Component {
  constructor(props) {
    super(props);
  this.state = { expanded: false, open: false, user: { receiver:this.props.reciever_phone } };
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChangeFor = (propertyName) => {    
    return (event) => {
      this.setState({
       user: {
          ...this.state.user,
          [propertyName] : event.target.value,
          id: this.props.id,
          receiver_phone:this.props.sponsor.phone
        },
      });
      console.log(this.state.user.receiver_phone);
    };
  }

  sendMessage = () => {
    console.log(this.state);
    this.props.dispatch({
      type: 'SEND_MESSAGE',
      payload: this.state.user,
    });
    this.handleClose();
    toast.success(`A text message has been sent to ${this.props.sponsor.username}`);

  }

  render() {
    const { classes } = this.props;
    const cityState = `${this.props.sponsor.city}, ${this.props.sponsor.state}`;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            title={this.props.name}
          />
          <CardMedia
            className={classes.media}
            image={this.props.sponsor.photo}

          />
          <CardHeader
            title={cityState}
          />
          <CardContent>
            <Typography component="p">
           Years Sober: {this.props.sponsor.years_sober}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              aria-label="message"
              onClick={this.handleClickOpen}
            >
              <TextsmsIcon />
            </IconButton>
            Message
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Bio"
            >
             Info
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              Hobbies/Interests:
              <Typography paragraph>
                {this.props.sponsor.hobbies}
              </Typography>
              Addiction History:
              <Typography paragraph>
               {this.props.sponsor.history}
              </Typography>
              <Typography />
            </CardContent>
          </Collapse>
        </Card>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Message to {this.props.name}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              To send a message, please enter your email address or phone number here. Then write a brief message introducing yourself. 
            </DialogContentText>
            
            <TextField
              autoFocus
              margin="dense"
              label="First Name"
              fullWidth
              onChange={this.handleChangeFor('sender')}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Phone"
              fullWidth
              onChange={this.handleChangeFor('phone')}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Email Address"
              fullWidth
              onChange={this.handleChangeFor('email')}
            />
            <TextField
              autoFocus
              margin="dense"
              label="Message"
              fullWidth
              onChange={this.handleChangeFor('message')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.sendMessage} color="primary">
              Send
            </Button>
          </DialogActions>
        </Dialog>
        <ToastContainer
          hideProgressBar={true}
          autoClose={3000}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  state,
});
const styledSponsorProfileCard = withStyles(styles)(SponsorProfileCard);
export default connect(mapStateToProps)(styledSponsorProfileCard);