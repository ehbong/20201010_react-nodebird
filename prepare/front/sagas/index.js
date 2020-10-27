import { all, fork, call, put, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/api/login', data);
}
function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(500);
    yield put({
      type: 'LOG_IN_SUCCESS',
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data,
    });
  }
}
function logOutAPI(data) {
  return axios.post('/api/login', data);
}
function* logOut(action) {
  try {
    // const result = yield call(logOutAPI, action.data);
    yield delay(500);
    yield put({
      type: 'LOG_OUT_SUCCESS',
    });
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data,
    });
  }
}
function postAPI(data) {
  return axios.post('/api/login', data);
}
function* post(action) {
  try {
    // const result = yield call(postAPI, action.data);
    yield delay(500);
    yield put({
      type: 'POST_SUCCESS',
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'POST_FAILURE',
      data: err.response.data,
    });
  }
}

// fork 비동기 함수호출
// call 동기 함수호출
// put 디스패처
// take 한번만 실행됨
// takeLatest 연속 동작시 마지막만 동작(요청은 통과, 응답은 한번만 받음)
// throttle 요청 자체에 시간제한을 설정
function* watchLogIn() {
  yield takeLatest('LOG_IN_REQUEST', logIn);
}
function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}
function* watchAddPost() {
  yield takeLatest('LOG_POST_REQUEST', post);
}

// function* generator 중단점이 있는 함수 yield 가 중단 명령어
export default function* rootSaga() {
  yield all([fork(watchLogIn, fork(watchLogOut), fork(watchAddPost))]);
}
