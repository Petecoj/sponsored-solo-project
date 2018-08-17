import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import EventDatePicker from '../EventDatePicker/EventDatePicker'
import Button from '@material-ui/core/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '200px'
  },
  button: {
    margin: theme.spacing.unit,
    position: 'left'
  },
  input: {
    display: 'none',
  },
});

class ComposedTextField extends React.Component {
    constructor(props){
        super(props)
        this.state = {
    
        };
    }


  handleChange = (propertyName) => {
      return (event) =>{
    this.setState({
        ...this.state,
         [propertyName]: event.target.value 
        });
  };
}
submitEvent = () => {
    this.props.dispatch({
      type: 'ADD_EVENT',
      payload: this.state
    })
  }

  render() {
    const { classes } = this.props;
    

    return (
      <div  style={{backgroundColor: 'rgba(255,255,255,0.5)', margin: '50px', padding: '10px', borderRadius: '15px'}} className={classes.container}>
        <FormControl className={classes.formControl}>
          {/* <InputLabel style={{color: 'white'}}>Event</InputLabel> */}
          <Input style={{color: 'white'}} id="name-simple" value={this.state.event} onChange={this.handleChange('name')} />
          <FormHelperText style={{color: 'white'}} id="name-helper-text">Event Name</FormHelperText>

        </FormControl>
        <FormControl  className={classes.formControl}>
          {/* <InputLabel style={{color: 'white'}} >Description</InputLabel> */}
          <Input style={{color: 'white'}} id="name-helper" value={this.state.description} onChange={this.handleChange('description')} />
          <FormHelperText style={{color: 'white'}} id="name-helper-text">Quick Description</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          {/* <InputLabel style={{color: 'white'}} >City</InputLabel> */}
          <Input style={{color: 'white'}} id="name-disabled" value={this.state.city} onChange={this.handleChange('city')} />
          <FormHelperText style={{color: 'white'}}>City</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          {/* <InputLabel style={{color: 'white'}} >City</InputLabel> */}
          <Input style={{color: 'white'}} id="name-disabled" value={this.state.date} onChange={this.handleChange('date')} />
          <FormHelperText style={{color: 'white'}}>Date</FormHelperText>
        </FormControl>
       
        <div>
        <Button onClick={this.submitEvent} variant="contained" color="primary" className={classes.button}>
        ADD EVENT
      </Button>
      </div>
    
      </div>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(ComposedTextField));