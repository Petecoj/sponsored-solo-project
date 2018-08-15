import { all, takeEvery, call, put as dispatch } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import axios from 'axios'


export default function* rootSaga() {
  yield takeEvery('GET_CARDS', getCards)
  yield takeEvery('SEND_MESSAGE', sendMessage)
  yield takeEvery('GET_MESSAGES', getMessages)
  yield takeEvery('GET_USER_INFO', getUserInfo)
  yield takeEvery('UPDATE_PROFILE', updateProfile)
  yield takeEvery('DELETE_ITEM', deleteItem)
  yield takeEvery('TOGGLE_AVAILABILITY', toggleAvailability)

  yield all([
    userSaga(),
    loginSaga(),
    // watchIncrementAsync()

  ]);
}

function* getCards() {
  try {
    const sponsorList = yield call(axios.get, '/api/sponsor')
    yield dispatch({
      type: 'GET_SPONSORS',
      payload: sponsorList.data
    })
  } catch (err) {
    yield console.log(err);
  }
}
function* sendMessage(action) {
  try {
    yield call(axios.post, '/api/sponsor', action.payload)
  } catch (error) {
    console.log(error);
  }
}
function* getMessages() {


  try {
    console.log('made it to GET users');
    const messages = yield call(axios.get, '/api/sponsor/messages')
    yield dispatch({
      type: 'STORE_MESSAGES',
      payload: messages.data
    })

  } catch (error) {
    console.log(error);
  }
}

function* getUserInfo() {
  try {
    const availability = yield call(axios.get, '/api/sponsor/available')
    console.log(availability.data);

    yield dispatch({
      type: 'GET_PROFILE',
      payload: availability.data[0]
    })

    

    

  } catch(error){
    console.log(error);
  }
  
  
}
function* updateProfile(action) {
  try {

    yield call(axios.put, '/api/sponsor/update', action.payload)
    yield dispatch({
      type: 'GET_USER_INFO'
    })
  } catch (error) {
    console.log(error);
  }
}
function* deleteItem(action) {

  try {
    yield call(axios.delete, `/api/sponsor/${action.payload}`);
    yield dispatch({
      type: 'GET_MESSAGES'
      
    })
  } catch (err) {
    yield console.log(err);

  }
}
function* toggleAvailability(){
  try{
    yield call(axios.put,'/api/sponsor')
    yield dispatch({
      type: 'GET_USER_INFO'
    })
  }catch(error){
    yield console.log(error);
  }
}