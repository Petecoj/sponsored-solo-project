import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar/NavBar';
// import { USER_ACTIONS } from '../../redux/actions/userActions';
import { withStyles } from '@material-ui/core/styles';
import SponsorProfileCard from '../SponsorProfileCard/SponsorProfileCard';
// import SearchCardsFilter from '../SearchCardsFilter/SearchCardsFilter'



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
        this.state={
            selectedCard: [],
            allSponsors: this.props.state.sponsorList
        }
    }
    componentDidMount() {
        this.props.dispatch({ type: 'GET_CARDS' })
        

    }
    componentDidUpdate(){
        console.log(this.props.state.sponsorList);
        
    }

    handleChange = name => value => {
        this.setState({
          [name]: value,
        });
      };
  

    render() {
   

        let sponsorListArray = this.props.state.sponsorList.map((sponsor, index) => {
            if (sponsor.available === true){
                return (<SponsorProfileCard key={index}
                                       name={sponsor.username} 
                                       id={sponsor.id}
                                       sponsor={sponsor}
                 />)
            }
    }) 
    
    
    

        return (
            <div>
                {/* <SearchCardsFilter/> */}
                <NavBar />
                 <h2 style={{color:'lightGrey', textAlign: 'center', fontSize: '36px'}}>
                    Browse Sponsors
                </h2>
                <input placeholder="Search..."></input>
                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                {sponsorListArray}
                </div>
                
            </div>
        );
    }
}

const StyledBrowseSponsorsPage = withStyles(styles)(BrowseSponsorsPage)

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(StyledBrowseSponsorsPage);
