import { call, all, put, takeEvery } from "redux-saga/effects";
import { actionTypes } from "../reducers/users";
import {
  getUsers as getAllUsers,
  sendInvite as sendInviteService,
  getUserGroups as getUserGroupsService,
  getSingleUser as getSingleUserService,
  updateUser as updateUserService,
  updateUserProfile as updateUserProfileService
} from "../service";
import processSetting from "../../../utils/processSetting";


function* getSingleUser({ id }) {
  yield processSetting({
    params: id,
    service: getSingleUserService,
    success: actionTypes.SINGLE_USER_SUCCESS,
    failed: actionTypes.SINGLE_USER_FAILED
  });
}

function* getUsers({ params }) {
  yield processSetting({
    params: params,
    service: getAllUsers,
    success: actionTypes.GET_USERS_SUCCESS,
    failed: actionTypes.GET_USERS_FAILED
  });
}

function* updateUser({ id, body }) {
  const actions = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: updateUserService,
    success: actionTypes.UPDATE_USER_SUCCESS,
    failed: actionTypes.UPDATE_USER_FAILED
  });
}

function* updateUserProfile({ id, body }) {
  const actions = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: updateUserProfileService,
    success: actionTypes.UPDATE_PROFILE_SUCCESS,
    failed: actionTypes.UPDATE_PROFILE_FAILED
  });
}

function* sendUserInvite({ id, body }) {
  const actions = Object.values({ id, body }).map(item => item);
  yield processSetting({
    params: actions,
    service: sendInviteService,
    success: actionTypes.INVITE_USERS_SUCCESS,
    failed: actionTypes.INVITE_USERS_FAILED
  });

  const action = yield call(getUserGroupsService);

  yield put({
    type: "GET_USER_GROUPS",
    action
  });
}

function* watchUsersRequest() {
  yield all([
    takeEvery(actionTypes.GET_USERS, getUsers),
    takeEvery(actionTypes.INVITE_USERS, sendUserInvite),
    takeEvery(actionTypes.SINGLE_USER, getSingleUser),
    takeEvery(actionTypes.UPDATE_USER, updateUser),
    takeEvery(actionTypes.UPDATE_PROFILE, updateUserProfile)
  ]);
}

export default [watchUsersRequest()];
