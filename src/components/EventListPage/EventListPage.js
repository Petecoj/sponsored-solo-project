import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { USER_ACTIONS } from '../../redux/actions/userActions';
import { withStyles } from '@material-ui/core/styles';
import EventCard from '../EventCard/EventCard'
import TextField from '@material-ui/core/TextField';




//views
//link to the add page
//get request
const mapStateToProps = state => ({
    state
});
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
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

function searchingFor(term) {
    return function (x) {
        return x.city.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class EventListPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_EVENTS' })

    }

    searchHandler(event) {
        this.setState({
            term: event.target.value
        })
    }


    render() {


        let eventListArray = this.props.state.eventList.filter(searchingFor(this.state.term)).map((event, index) => {

            return (<EventCard key={index}
                event={event}
            />)

        })




        return (
            <div>
                <h2 style={{ color: 'white', textAlign: 'center', fontSize: '24px' }}>
                    Events Happening in Your city
                </h2>
                <form style={{ display: 'flex', position: 'right', height: 60, background: 'rgba(255,255,255,0.5)', borderRadius: 15 }}>
                    <TextField
                        id="full-width"
                        label=""
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Search..."
                        helperText="What city are you looking for?"
                        width='50'
                        margin="normal"
                        onChange={this.searchHandler}
                        value={this.state.term}
                    />
                </form>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    {eventListArray}
                </div>

            </div>
        );
    }
}

const StyledEventListPage = withStyles(styles)(EventListPage)

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(StyledEventListPage);
