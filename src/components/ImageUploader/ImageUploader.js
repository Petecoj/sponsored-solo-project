import React from 'react';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AddIcon from '@material-ui/icons/Add'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
        this.state = {
            file: '',
            imagePreviewUrl: '',
            photo: ''
        };
        // this.apiKey = 'AEI4el0aFQVy89sthpcBdz'
        // this.client = filestack.init(this.apiKey);
        // this.options = {
        //     uploadInBackground: false,
        //     onUploadDone: this.showFileData
        // };
    }

    // showFileData = (response) => {
    //     this.props.dispatch({
    //         type: this.props.type,
    //         payload: {
    //             photo: response.filesUploaded[0],
    //             event: this.props.newEvent
    //         }
    //     })
    //     toast.success(' ImageUploaded');
    // }
    componentDidMount() {
        this.config = {
            cloud_name: "dftsayunq",
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            upload_preset: 'k5z6zjgb'
        }
    }
    //   openCloudinary = () => {
    //     window.cloudinary.openUploadWidget(this.config, (error, result) => {
    //         if (result) {
    //             let cloudinaryUrl = result.info.secure_url || 'https://res.cloudinary.com/dhdgecggi/image/upload/v1536937033/Crowdrise_default.png';
    //             this.setState({
    //                 // store url to local state BEFORE disptaching an action
    //                 ...this.state,
    //                 upload_image: cloudinaryUrl
    //             })
    //         }
    //     })

    // }
    openCloudinary = () => {
        window.cloudinary.openUploadWidget(this.config, (error, result) => {
            console.log(result);
            
            if (result.event === "success") {
                let cloudinaryUrl = result.info.secure_url || 'https://res.cloudinary.com/dftsayunq/image/upload/v1536937033/Crowdrise_default.png';
                this.props.dispatch({
                    type: this.props.type,
                    payload: {
                        photo: cloudinaryUrl,
                        event: this.props.newEvent
                    }
                })
            }

        })
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
        )
    }
}
export default connect()(withStyles(styles)(ImageUpload));

