import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import EventIcon from '@material-ui/icons/Event';
import FaceIcon from '@material-ui/icons/Face';
import SearchIcon from '@material-ui/icons/Search';

import { Link } from 'react-router-dom';


const styles = {
//   root: {
//     width: 500,
//   },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}

      >
        <BottomNavigationAction component={Link} to="/register" label="Register as a Sponsor!" icon={<HowToRegIcon />} />
        <BottomNavigationAction component={Link} to="/info" label="Events/Resources" icon={<EventIcon />} />
        <BottomNavigationAction component={Link} to="/browse" label="Browse/Search Sponsors" icon={<SearchIcon />} />
        <BottomNavigationAction component={Link} to="/user" label="Sponsor Profile/Login" icon={<FaceIcon />} />



      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);