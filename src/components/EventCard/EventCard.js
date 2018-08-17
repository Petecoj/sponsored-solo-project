import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';



const styles = theme => ({
  card: {
    maxWidth: 200,
    margin: 25,
    background: 'rgba(255,255,255,0.5)'

  },
  actions: {
    display: 'flex',
  },
  Typography:{
  htmlFontSize: 30,

  },

});

class SponsorProfileCard extends React.Component {
  constructor(props){
    super(props)
  this.state = { expanded: false, open: false, user: {} };

  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card  className={classes.card}>
          <CardHeader
            title={this.props.event.event}
     
          />
          <CardContent>
            <Typography style={{color:'white'}} component="p">
           Description: {this.props.event.description}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography style={{color:'white'}} component="p">
           City: {this.props.event.city}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography style={{color:'white'}} component="p">
           Date: {this.props.event.date}
            </Typography>
          </CardContent>

        </Card>
      
      </div>
    );
  }
}

SponsorProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  user: state.user,
  state
});
const styledSponsorProfileCard = withStyles(styles)(SponsorProfileCard)
export default connect(mapStateToProps)(styledSponsorProfileCard);