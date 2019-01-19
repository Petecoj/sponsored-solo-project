import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        height: 10,
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

    this.state = {
    };
}

    submitEvent = () => {
        const { dispatch } = this.props;
        dispatch({
          type: 'NEW_EVENT',
          payload: this.state,
        });
      }

render() {
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

export default connect()(withStyles(styles)(DatePickers));