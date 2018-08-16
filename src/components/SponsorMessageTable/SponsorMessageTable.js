import React, { Component } from 'react';
import { connect } from 'react-redux'
import { USER_ACTIONS } from '../../redux/actions/userActions';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const CustomTableCell = withStyles(theme => ({
  head: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
    background: 'rgba(255,255,255,0.5)'
  },
  body: {
    fontSize: 10,
    // background: 'rgba(255,255,255,0.5)'
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    background: 'rgba(255,255,255,0.5)',
    display: 'flex'
  },
  table: {
    minWidth: 700,
  
  },
  // row: {
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: theme.palette.background.default,
  
    
      
  //   },
  // },
});


class CustomizedTable extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER })

  }
  handleDelete = (messageid) => {    
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      alert('You must be logged in to delete!')
    } else {
      this.props.dispatch({
        type: 'DELETE_ITEM', payload: messageid

      })
    }
   
    
  }

  render() {
    const { classes } = this.props;
    let messageArray = this.props.messageList.map((message, index) => {
      return <TableRow key={index} className={classes.row}>
                 <CustomTableCell>{message.sender}</CustomTableCell>
                 <CustomTableCell>{message.email}</CustomTableCell>
                 <CustomTableCell>{message.phone}</CustomTableCell>
                 <CustomTableCell>{message.message}</CustomTableCell>
                 <CustomTableCell>
                 <Button onClick={()=>this.handleDelete(message.messageid)} variant="contained" color="secondary" className={classes.button}>
                    <DeleteIcon className={classes.rightIcon} />
                 </Button>
                 </CustomTableCell>
              </TableRow>

    })
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Name</CustomTableCell>
              <CustomTableCell>Email</CustomTableCell>
              <CustomTableCell>Phone</CustomTableCell>
              <CustomTableCell>Message</CustomTableCell>
              <CustomTableCell>Delete</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messageArray}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
const mapStateToProps = state => ({
  user:state.user,
  state
});
CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};
const styledTable = withStyles(styles)(CustomizedTable)
export default connect(mapStateToProps)(styledTable);