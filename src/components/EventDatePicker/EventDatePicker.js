import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        height: 10
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});


class DatePickers extends Component {
    constructor(props) {
        super(props);

    this.state= {
     
    }
    }
    submitEvent = () => {
        this.props.dispatch({
          type: 'NEW_EVENT',
          payload: this.state
        })
      }
  
render(){
    console.log(this.props);
    
    const { classes } = this.props;
    return (
        <div>
       
        <Button onClick={this.submitEvent} variant="contained" color="primary" className={classes.button}>
        ADD EVENT
      </Button>
     </div>
    );
}
}
DatePickers.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default connect()(withStyles(styles)(DatePickers));