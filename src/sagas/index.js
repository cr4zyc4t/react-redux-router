import { takeEvery, all, fork, call } from "redux-saga/effects";

function* helloSaga() {
  yield takeEvery("READY", function* (actions) {
    yield call(console.log, actions);
  });
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    fork(helloSaga),
  ]);
}