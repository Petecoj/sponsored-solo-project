import { all, takeEvery, call, put as dispatch } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import axios from 'axios'


export default function* rootSaga() {
  yield takeEvery('GET_CARDS', getCards)
  yield all([
    userSaga(),
    loginSaga(),
    // watchIncrementAsync()

  ]);
}

function* getCards(){
  try {
    const sponsorList = yield call(axios.get, '/api/sponsor')
    yield dispatch({
      type: 'GET_SPONSORS',
      payload: sponsorList.data
    })
    console.log(sponsorList.data)
  } catch (err) {
    yield console.log(err);
  }
}