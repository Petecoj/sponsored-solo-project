import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import ImageUploader from '../ImageUploader/ImageUploader'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  formControl: {
    margin: theme.spacing.unit,
    width: '200px',
    
  },
  button: {
    margin: theme.spacing.unit,
    position: 'left'
  },
  input: {
    // display: 'none',
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
getUploaderInfo = (info)=>{
    this.setState({
        photo: info
    })

}
submitEvent = () => {
    this.props.dispatch({
      type: 'NEW_EVENT',
      payload: this.state
    })
  }

  render() {
    const { classes } = this.props;
    

    return (
      <div>
      <h2 style={{color:'white', textAlign: 'center', fontSize: '24px'}}>
      Add an Event!
      </h2>
      <div  style={{  backgroundColor: 'rgba(255,255,255,0.5)', margin: '50px', padding: '10px', borderRadius: '15px'}} className={classes.container}>
        <FormControl className={classes.formControl}>
          {/* <InputLabel style={{color: 'white'}}>Event</InputLabel> */}
          <Input style={{color: 'white'}} id="name-simple" value={this.state.event} onChange={this.handleChange('event')} />
          <FormHelperText style={{color: 'white'}} id="name-helper-text">Event Name</FormHelperText>

        </FormControl>
        <FormControl className={classes.formControl}>
          {/* <InputLabel style={{color: 'white'}}>Event</InputLabel> */}
          <Input style={{color: 'white'}} id="name-simple" value={this.state.address} onChange={this.handleChange('address')} />
          <FormHelperText style={{color: 'white'}} id="name-helper-text">Address</FormHelperText>

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
        {/* <FormControl className={classes.formControl}> */}
          {/* <InputLabel style={{color: 'white'}} >City</InputLabel> */}
          {/* <Input style={{color: 'white'}} id="name-disabled" value={this.state.date} onChange={this.handleChange('date')} /> */}
          {/* <FormHelperText style={{color: 'white'}}>Date</FormHelperText> */}
        {/* </FormControl> */}
        {/* <EventDatePicker/> */}
        <FormControl className={classes.formControl}>
            <TextField
                id="date"
                label="Event Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                    
                }}
                value={this.state.date}
                onChange={this.handleChange('date')}
            />
           </FormControl>
        <ImageUploader type={'ADD_EVENT'}
                       newEvent={this.state}
                       className={classes.uploader}
        />
       
      
      </div>
      </div>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(ComposedTextField));