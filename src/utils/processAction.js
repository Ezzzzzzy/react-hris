import { call, put } from "redux-saga/effects";

export default function* processAction(action) {
  const { params, service, success, failed } = action;

  try {
    const payload = yield call(service, params);
    yield put({
      type: success,
      payload
    });
  } catch (error) {
    yield put({
      type: failed,
      error
    });
  }
}
