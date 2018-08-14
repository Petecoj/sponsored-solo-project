import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 150,
    marginRight: 300,
    marginLeft: 300,
    backgroundColor: 'blanchedalmond'
   
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  
  },


});
class InputAdornments extends React.Component {
  constructor(){
    super()
    this.state = {
      email: '',
      phone: '',
      city: '',
      state: '',
      hobbies: '',
      history: '',
      
    };
  }
  

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">Email</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.email}
            onChange={this.handleChange('email')}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">Phone</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.phone}
            onChange={this.handleChange('phone')}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">City</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.city}
            onChange={this.handleChange('city')}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">State</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.state}
            onChange={this.handleChange('state')}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel>Hobbies</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.hobbies}
            onChange={this.handleChange('hobbies')}
          />
        </FormControl>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel>Addiction History</InputLabel>
          <Input
            id="adornment-amount"
            value={this.state.history}
            onChange={this.handleChange('history')}

          />
        </FormControl>
        
        
      </div>
    );
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAdornments);
