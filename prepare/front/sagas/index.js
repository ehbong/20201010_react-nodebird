import { all, fork, call, put, take } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/api/login', data);
}
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data,
    });
  }
}

// fork 비동기 함수호출
// call 동기 함수호출
// put 디스패처
function* watchLogIn() {
  yield take('LOG_IN_REQUEST', logIn);
}
function* watchLogOut() {
  yield take('LOG_OUT_REQUEST', logIn);
}
function* watchAddPost() {
  yield take('LOG_POST_REQUEST', logIn);
}

// function* generator 중단점이 있는 함수 yield 가 중단 명령어
export default function* rootSaga() {
  yield all([fork(watchLogIn, fork(watchLogOut), fork(watchAddPost))]);
}
