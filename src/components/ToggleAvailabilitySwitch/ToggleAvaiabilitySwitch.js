import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { connect } from 'react-redux'
import axios from 'axios'

class SwitchLabels extends React.Component {

    state = {
        available: this.props.available

    };


    handleChange = name => event => {
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
            <div>
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    available: state.currentSponsor.available
})

export default connect(mapStateToProps)(SwitchLabels);