import { all, call, put, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./reducer";
import { login as loginService, logout as logoutService } from "./service";
import { actionTypes as profileActionTypes } from "../profile/reducer";
import { whoami as getProfileRequest } from "../profile/service";
import processSetting from "../../utils/processSetting";

function* login({ payload }) {
  yield processSetting({
    params: payload,
    service: loginService,
    success: actionTypes.LOGIN_SUCCESS,
    failed: actionTypes.LOGIN_FAILED
  });

  const action = yield call(getProfileRequest);

  yield put({
    type: profileActionTypes.GET_PROFILE_REQUEST,
    action
  });
}

function* logout({ id }) {
  const actions = Object.values({ id }).map(val => val);

  yield processSetting({
    params: [...actions],
    service: logoutService,
    success: actionTypes.LOGOUT_SUCCESS,
    failed: actionTypes.LOGOUT_FAILED
  });
}

function* watchAuthRequests() {
  yield all([
    takeEvery(actionTypes.LOGIN_REQUEST, login),
    takeEvery(actionTypes.LOGOUT_REQUEST, logout)
  ]);
}

export default [watchAuthRequests()];
