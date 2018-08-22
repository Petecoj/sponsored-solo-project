import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
//   input: {
//     display: 'none',
//   },
});

function EditProfileButton(props) {
  const { classes } = props;
  return (
    <div>
     
      <Button style={{backgroundColor:'lightSkyBlue'}} onClick={props.handleClickOpen} variant="contained" color="primary" className={classes.button}>
        Edit Profile
      </Button>
      
    </div>
  );
}

EditProfileButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditProfileButton);