import React from 'react';
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
    background: 'lightSkyBlue',

  },
};

class SimpleBottomNavigation extends React.Component {
  render() {
    const { classes } = this.props;


    return (
      <BottomNavigation
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction component={Link} to="/register" label="Register" icon={<HowToRegIcon />} />
        <BottomNavigationAction component={Link} to="/login" label="Sponsor Login" icon={<PersonIcon />} />
        <BottomNavigationAction component={Link} to="/events" label="Events" icon={<EventIcon />} />
        <BottomNavigationAction component={Link} to="/browse" label="Browse/Search Sponsors" icon={<SearchIcon />} />
        <BottomNavigationAction component={Link} to="/info" label="Resources" icon={<FolderIcon />} />

      </BottomNavigation>
    );
  }
}


export default withStyles(styles)(SimpleBottomNavigation);