import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  card: {
    width: 300,
    margin: 25,
    background: 'rgba(255,255,255,0.5)',
    color: 'white',
  },
  actions: {
    display: 'flex',
  },
  Typography: {
  htmlFontSize: 30,
  },
  CardHeader: {
      color: 'white',
  },
  media: {
    paddingTop: '86.25%', // 16:9
  },
});

class SponsorProfileCard extends React.Component {
  constructor(props) {
    super(props);
  this.state = { expanded: false, open: false, user: {} };
  }

  deleteEvent = (id) => {
    console.log(id);
    axios.delete(`/api/sponsor/events/${id}`)
    .then((results) => {
      this.props.dispatch({
        type: 'GET_EVENTS',
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card style={{ color: 'white' }} className={classes.card}>
          <CardHeader
            style={{ color: 'white' }}
            title={this.props.event.event}
            subheader={this.props.event.address}
            
          />
          <CardMedia
            className={classes.media}
            image={this.props.event.photo}
          />
          <CardContent>
            <Typography style={{ fontSize: 14 }} component="p">
                {this.props.event.city}
            </Typography>
            <br />
            <Typography style={{ fontSize: 14 }} component="p">
                {this.props.event.date}
            </Typography>
            <Typography style={{ fontSize: 14 }} component="p">
                {this.props.event.description}
            </Typography>
          </CardContent>
          <IconButton onClick={() => this.deleteEvent(this.props.event.id)} className={classes.button} aria-label="Delete">
            <DeleteIcon />
          </IconButton>

        </Card>
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