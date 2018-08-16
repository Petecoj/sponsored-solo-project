import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import EventIcon from '@material-ui/icons/Event';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';

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
        <BottomNavigationAction component={Link} to="/register" label="Register" icon={<HowToRegIcon />} />
        <BottomNavigationAction component={Link} to="/login" label="Sponsor Login" icon={<PersonIcon />} />
        <BottomNavigationAction component={Link} to="/info" label="Events/Resources" icon={<EventIcon />} />
        <BottomNavigationAction component={Link} to="/browse" label="Browse/Search Sponsors" icon={<SearchIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);