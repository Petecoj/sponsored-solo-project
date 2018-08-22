import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { USER_ACTIONS } from '../../redux/actions/userActions';
import { withStyles } from '@material-ui/core/styles';
import EventCard from '../EventCard/EventCard'



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


class EventListPage extends Component {
    constructor(props) {
        super(props)
    
    }
    
    componentDidMount(){
        this.props.dispatch({type:'GET_EVENTS'})
        
    }
  

    render() {
   

        let eventListArray = this.props.state.eventList.map((event, index) => {
        
                return (<EventCard key={index}
                                    event={event}
                 />)
            
    }) 
    
    
    

        return (
            <div>
                 <h2 style={{color:'white', textAlign: 'center', fontSize: '24px'}}>
                    Events Happening in Your city
                </h2>
                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                {eventListArray}
                </div>
                
            </div>
        );
    }
}

const StyledEventListPage = withStyles(styles)(EventListPage)

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(StyledEventListPage);
