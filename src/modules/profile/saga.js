import { all, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./reducer";
import { whoami as serviceGetProfile } from "./service";
import processSetting from "../../utils/processSetting";

function* getProfile() {
  yield processSetting({
    service: serviceGetProfile,
    success: actionTypes.GET_PROFILE_REQUEST_SUCCESS,
    failed: actionTypes.GET_PROFILE_REQUEST_FAILED
  });
}

function* watchProfileRequests() {
  yield all([
    takeEvery("LOGIN_SUCCESS", getProfile),
    takeEvery("GET_PROFILE_REQUEST", getProfile)
  ]);
}

export default [watchProfileRequests()];
