import React from 'react';
import * as filestack from 'filestack-js';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';



const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
      color: 'green'
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
    iconSmall: {
      fontSize: 20,
    },
    
  });
  

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
        this.apiKey = 'AEI4el0aFQVy89sthpcBdz'
        this.client = filestack.init(this.apiKey);
        this.options = {
            uploadInBackground: false,
            onUploadDone: this.showFileData
        };
    }

    showFileData = (response) => {
        console.log(response);
        console.log('newenevent', this.props.newEvent);
        // eventUrl = response.filesUploaded[0]
        this.props.dispatch({
            type: this.props.type,
            payload: {
                photo: response.filesUploaded[0],
                event: this.props.newEvent
        }})

    }
   


    render() {
    
        const { classes } = this.props;


        return (
            <form style={{ float: 'right', height: 50 }}>
                <label for="fileupload">Select a file to upload</label>
                {/* <input type="file" id="fileupload"/> */}
                <Button onClick={() => this.client.picker(this.options).open()} variant="contained" color="default" className={classes.button}>
                    Upload
                <CloudUploadIcon className={classes.rightIcon} />
                </Button>
            </form>
        )
    }
}
export default connect()(withStyles(styles)(ImageUpload));

