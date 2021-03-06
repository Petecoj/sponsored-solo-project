import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import { USER_ACTIONS } from '../../redux/actions/userActions';


const CustomTableCell = withStyles(theme => ({
  head: {
    background: 'rgba(255,255,255,0.5)',
  },
  body: {
    fontSize: 16,

  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    background: 'rgba(255,255,255,0.5)',
    display: 'flex',
    marginBottom: '50px',

  },
  table: {
    minWidth: 700,
  },
});


class CustomizedTable extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  handleDelete = (messageId) => {    
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      alert('You must be logged in to delete!');
    } else {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this message!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          this.props.dispatch({
            type: 'DELETE_ITEM', payload: messageId,
          });
          swal('Message has been deleted!', {
            icon: 'success',
          });
        } else {
          swal('Your imaginary file is safe!');
        }
      });
    }
  }


  render() {
    const { classes } = this.props;
    const messageArray = this.props.messageList.map((message, index) => {
      return (
        <TableRow key={index} className={classes.row}>
          <CustomTableCell>{message.sender}</CustomTableCell>
          <CustomTableCell>{message.email}</CustomTableCell>
          <CustomTableCell>{message.phone}</CustomTableCell>
          <CustomTableCell>{message.message}</CustomTableCell>
          <CustomTableCell>
            <Button onClick={() => this.handleDelete(message.messageid)} variant="contained" color="secondary" className={classes.button}>
              <DeleteIcon className={classes.rightIcon} />
            </Button>
          </CustomTableCell>
        </TableRow>
      );

    })
    return (
      <div>
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
        <ToastContainer
          hideProgressBar={true}
          autoClose={3000}
        />

      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
  state,
});

const styledTable = withStyles(styles)(CustomizedTable)
export default connect(mapStateToProps)(styledTable);