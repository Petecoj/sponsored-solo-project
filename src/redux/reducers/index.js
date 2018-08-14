import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';


const list = (state = [], action) => {
  switch (action.type){
    case 'GET_SPONSORS':
    return action.payload
    default:
    return state
  }
}
const store = combineReducers({
  user,
  login,
  list
});


export default store;
