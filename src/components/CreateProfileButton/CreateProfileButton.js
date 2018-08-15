import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});



class ContainedButtons extends Component {

handleProfileSubmit = () => {
    this.props.dispatch({
        type: 'CREATE_PROFILE',
        payload: this.props.newProfile
    })
}

    render() {


        const { classes } = this.props;
        return (
            <div>
                <Button onClick={this.handleProfileSubmit} variant="contained" color="primary" className={classes.button}>
                    Submit
                </Button>
            </div>
        );
    }
}

const styledCreateProfileButton = withStyles(styles)(ContainedButtons)
export default connect()(styledCreateProfileButton);