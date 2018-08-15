import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';


const sponsorList = (state = [], action) => {
  switch (action.type) {
    case 'GET_SPONSORS':
      return action.payload
   
    default:
      return state
  }
}
const messageList = (state = [], action) => {
  switch (action.type) {
    case 'STORE_MESSAGES':
      return action.payload
    default:
      return state
  }
}
const currentSponsor = (state = {}, action) =>{
  switch (action.type){
    case 'GET_PROFILE':
    return action.payload
    default:
    return state
  }
}



const store = combineReducers({
  user,
  login,
  sponsorList,
  messageList,
  currentSponsor

});


export default store;
