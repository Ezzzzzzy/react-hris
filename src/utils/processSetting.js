import { call, put } from "redux-saga/effects";
import { message } from "antd";

export default function* processSetting(action) {
  const { params, service, success, failed } = action;

  try {
    const payload = Array.isArray(params)
      ? yield call(service, ...params)
      : yield call(service, params);
    yield put({
      type: success,
      payload
    });

    message.success(success.split("_").join(" "));
  } catch (error) {
    message.error(failed.split("_").join(" "));

    yield put({
      type: failed,
      error
    });

    console.log(error);
    // message.error(error);
  }
}
