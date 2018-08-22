import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import EventIcon from '@material-ui/icons/Event';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import FolderIcon from '@material-ui/icons/Folder';


import { Link } from 'react-router-dom';


const styles = {
  root: {
    background: 'rgba(255,255,255,0.5)',
    
  },
  icon:{

  }
  
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
        <BottomNavigationAction  styles={{backgroundColor: 'lightGreen'}} component={Link} to="/register" label="Register" icon={<HowToRegIcon />} />
        <BottomNavigationAction component={Link} to="/login" label="Sponsor Login" className={classes.icon} icon={<PersonIcon />} />
        <BottomNavigationAction component={Link} to="/events" label="Events" icon={<EventIcon />}/>
        <BottomNavigationAction component={Link} to="/browse" label="Browse/Search Sponsors" icon={<SearchIcon />} />
        <BottomNavigationAction component={Link} to="/info" label="Resources" icon={<FolderIcon />} />

      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);