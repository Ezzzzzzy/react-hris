import { all, takeEvery } from "redux-saga/effects";
import { actionTypes } from "../reducers/user-groups";
import {
  getUserGroups as getUserGroupsService,
  getAllUserGroups as getAllUserGroupsService,
  createUserGroups as createUserGroupSservice,
  getSingleUserGroup as getSingleUserGroupService,
  updateUserGroup as updateUserGroupService
} from "../service";
import processSetting from "../../../utils/processSetting";

function* getSingleUserGroup({ id }) {
  yield processSetting({
    params: id,
    service: getSingleUserGroupService,
    success: actionTypes.GET_SINGLE_USER_GROUP_SUCCESS,
    failed: actionTypes.GET_SINGLE_USER_GROUP_FAILED
  });
}

function* updateUserGroup({ id, body }) {
  const actions = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: updateUserGroupService,
    success: actionTypes.CREATE_USER_GROUPS_SUCCESS,
    failed: actionTypes.CREATE_USER_GROUPS_FAILED
  });
}

function* createUserGroup({ body }) {
  yield processSetting({
    params: body,
    service: createUserGroupSservice,
    success: actionTypes.CREATE_USER_GROUPS_SUCCESS,
    failed: actionTypes.CREATE_USER_GROUPS_FAILED
  });
}

function* getUserGroups({ filters }) {
  yield processSetting({
    params: filters,
    service: getUserGroupsService,
    success: actionTypes.GET_USER_GROUPS_SUCCESS,
    failed: actionTypes.GET_USER_GROUPS_FAILED
  });
}

function* getAllUserGroups() {
  yield processSetting({
    service: getAllUserGroupsService,
    success: actionTypes.GET_ALL_USER_GROUPS_SUCCESS,
    failed: actionTypes.GET_ALL_USER_GROUPS_FAILED
  });
}

function* watchUserGroupsRequests() {
  yield all([
    takeEvery(actionTypes.GET_USER_GROUPS, getUserGroups),
    takeEvery(actionTypes.GET_ALL_USER_GROUPS, getAllUserGroups),
    takeEvery(actionTypes.GET_SINGLE_USER_GROUP, getSingleUserGroup),
    takeEvery(actionTypes.UPDATE_USER_GROUPS, updateUserGroup),
    takeEvery(actionTypes.CREATE_USER_GROUPS, createUserGroup)
  ]);
}

export default [watchUserGroupsRequests()];
