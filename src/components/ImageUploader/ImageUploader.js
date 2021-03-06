import React from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        color: 'green',
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
        this.state = {
          file: '',
          imagePreviewUrl: '',
          photo: ''
        };
    }

    componentDidMount() {
        this.config = {
            cloud_name: 'dftsayunq',
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            upload_preset: 'k5z6zjgb',
        };
    }

    openCloudinary = () => {
        window.cloudinary.openUploadWidget(this.config, (error, result) => {
            console.log(result);
            if (result.event === 'success') {
                const cloudinaryUrl = result.info.secure_url || 'https://res.cloudinary.com/dftsayunq/image/upload/v1536937033/Crowdrise_default.png';
                this.props.dispatch({
                    type: this.props.type,
                    payload: {
                        photo: cloudinaryUrl,
                        event: this.props.newEvent,
                    },
                });
            }
        });
    }

    addPhoto = () => {
 
    }


    render() {

        const { classes } = this.props;


        return (
          <div>
            <form style={{ float: 'right', height: 50 }}>
              <label htmlFor="fileupload">Select a photo to upload</label>
              <Button onClick={() => this.openCloudinary()} variant="contained" color="default" className={classes.button}>
                        Upload
                <CloudUploadIcon className={classes.rightIcon} />
              </Button>
            </form>
          </div>
        );
    }
}
export default connect()(withStyles(styles)(ImageUpload));
