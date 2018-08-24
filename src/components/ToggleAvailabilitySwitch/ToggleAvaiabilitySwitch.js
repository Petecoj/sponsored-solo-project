import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux'
import green from '@material-ui/core/colors/green'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SwitchLabels extends React.Component {

    state = {
        available: this.props.available

    };


    handleChange = name => event => {
        if (event.target.checked === true) {
            toast.success(' Profile will be visible')
        } else {
            toast.warn(' Profile will be hidden')
        }
        this.setState({ available: event.target.checked });
        this.props.dispatch({
            type: 'TOGGLE_AVAILABILITY'
        })

    };


    render() {
        let content;
        if (this.props.available === true) {
            content = (
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={true}
                                onChange={this.handleChange('available')}
                                value="checkedA"
                                color= 'primary'
                               
                                      />
                                  }
                                  label="Available"
                              />
                </FormGroup>
            );
        } else {

            content = (

                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={false}
                                onChange={this.handleChange('available')}
                                value="checkedA"
                            />
                        }
                        label="Unavailable"
                    />
                </FormGroup>
            )

        }
        return (
            <div style={{ borderRadius: 25, marginTop: '10px', backgroundColor: 'lightSkyBlue', width: 120, height: 50, margin: 20, padding: 5 }}>
                {content}
                <ToastContainer
                    hideProgressBar={true}
                    autoClose={3000}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    available: state.currentSponsor.available
})

export default connect(mapStateToProps)(SwitchLabels);