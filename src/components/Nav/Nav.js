import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EventIcon from '@material-ui/icons/Event';
import FaceIcon from '@material-ui/icons/Face';
import SearchIcon from '@material-ui/icons/Search';
import Power_Settings_NewIcon from '@material-ui/icons/PowerSettingsNew';


import { Link } from 'react-router-dom';


const styles = {
  root: {
    background: 'rgba(255,255,255,0.5)'
  },
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
        <BottomNavigationAction component={Link} to="/info" label="Events/Resources" icon={<EventIcon />} />
        <BottomNavigationAction component={Link} to="/browse" label="Browse/Search Sponsors" icon={<SearchIcon />} />
        <BottomNavigationAction component={Link} to="/login" label="My Profile" icon={<FaceIcon />} />
        <BottomNavigationAction component={Link} to="/home" label="logout" icon={<Power_Settings_NewIcon />} />

      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);