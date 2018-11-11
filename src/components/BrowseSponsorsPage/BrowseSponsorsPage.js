import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NavBar from '../NavBar/NavBar';
// import { USER_ACTIONS } from '../../redux/actions/userActions';
import SponsorProfileCard from '../SponsorProfileCard/SponsorProfileCard';


// views
// link to the add page
// get request
const mapStateToProps = state => ({
    state,
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
    form: {
        height: 20,
    },
});

function searchingFor(term) {
    return function (sponsor) {
        if (sponsor.city) {
        return sponsor.city.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    };
}
class BrowseSponsorsPage extends Component {
    constructor(props) {
        super(props);
        const { state } = this.props;
        this.state = {
            allSponsors: state.sponsorList,
            term: '',
        };
        this.searchHandler = this.searchHandler.bind(this);
    }

    componentDidMount() {
      const { dispatch, state } = this.props;
        dispatch({ type: 'GET_CARDS' });

        this.setState({
            allSponsors: state.sponsorList,
        });
    }

    handleChange = name => (value) => {
        this.setState({
            [name]: value,
        });
    };

    searchHandler(event) {
        this.setState({
           term: event.target.value,
        });
    }


    render() {
         const sponsorListArray = this.props.state.sponsorList.filter(searchingFor(this.state.term)).map((sponsor) => {
            if (sponsor.available === true) {
                return (
                  <SponsorProfileCard
                    key={sponsor.id}
                    name={sponsor.username}
                    id={sponsor.id}
                    sponsor={sponsor}
                  />);
            }
        });


        return (
          <div>
            <NavBar />
            <h2 style={{ color: 'white', textAlign: 'center', fontSize: '24px' }}>
              BROWSE SPONSORS
            </h2>
            <form style={{ height: 60, background: 'rgba(255,255,255,0.5)', borderRadius: 15}}>
              <TextField
                id="full-width"
                label=""
                InputLabelProps={{
                    shrink: true,
                }}
                placeholder="Search..."
                helperText="What city are you looking for?"
                width="50"
                margin="normal"
                onChange={this.searchHandler}
                value={this.state.term}
              />
            </form>
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              {sponsorListArray}
            </div>

          </div>
        );
    }
}

const StyledBrowseSponsorsPage = withStyles(styles)(BrowseSponsorsPage)

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(StyledBrowseSponsorsPage);
