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
  yield takeEvery('UPLOAD_PHOTO', uploadPhoto)
  yield takeEvery('ADD_EVENT', addEvent)
  yield takeEvery('GET_EVENTS', getEventsList)
  yield takeEvery('NEW_EVENT', uploadEventPhoto)

  

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





  } catch (error) {
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
function* toggleAvailability() {
  try {
    yield call(axios.put, '/api/sponsor')
    yield dispatch({
      type: 'GET_USER_INFO'
    })
  } catch (error) {
    yield console.log(error);
  }
}

function* uploadPhoto(action) {
  try {
    console.log(action.payload, "paylooood");
    
    yield call(axios.put, 'api/sponsor/photo', action.payload)
    yield dispatch({
      type: 'GET_USER_INFO'
    })
  } catch (error) {
    console.log(error);
  }
}
function* addEvent(action){
  try{
    yield call(axios.post,'api/sponsor/events', action.payload)
    yield dispatch({
      type: "GET_EVENTS"
    })
  }catch(error){
    console.log(error); 
  }
}
function* getEventsList(){
  try{ 
    const eventsList = yield call(axios.get, '/api/sponsor/events')
    yield dispatch({
      type: 'STORE_EVENTS',
      payload: eventsList.data
    })

  }catch(error){
    console.log(error);
    
  }
}
function* uploadEventPhoto(action) {
  try {
    yield call(axios.put, 'api/sponsor/events_photo', action.payload)
    yield dispatch({
      type: 'GET_EVENTS'
    })
  } catch (error) {
    console.log(error);
  }
}