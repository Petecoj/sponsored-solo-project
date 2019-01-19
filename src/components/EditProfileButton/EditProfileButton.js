import React from 'react';
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
  const { handleClickOpen } = props;
  return (
    <div>

      <Button style={{ backgroundColor: 'lightSkyBlue' }} onClick={handleClickOpen} variant="contained" color="primary" className={classes.button}>
        Edit Profile
      </Button>

    </div>
  );
}

export default withStyles(styles)(EditProfileButton);