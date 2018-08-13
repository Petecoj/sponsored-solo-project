import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
// import { USER_ACTIONS } from '../../redux/actions/userActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import SponsorProfileCard from '../SponsorProfileCard/SponsorProfileCard';


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


class BrowseSponsorsPage extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.dispatch({ type: 'GET_CARDS' })
    }


  

    render() {
        console.log(this.props.state);
         this.props.state
        let content = null;
        const { classes } = this.props;

        let sponsorListArray = this.props.state.list.map((sponsor, index) => {
            return <SponsorProfileCard key={index}
                                       name={sponsor.username} 
             />
        })


        return (
            <div>
                <Nav />
                 <p>
                    Browse Sponsors
                </p>
                {sponsorListArray}
            </div>
        );
    }
}

const StyledBrowseSponsorsPage = withStyles(styles)(BrowseSponsorsPage)

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(StyledBrowseSponsorsPage);
