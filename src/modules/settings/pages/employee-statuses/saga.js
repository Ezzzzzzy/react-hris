import { all, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./reducer";
import {
  getEmployeeStatus as getAllEmployeeStatus,
  createEmployeeStatus,
  updateEmployeeStatus,
  deleteEmployeeStatus,
  allEmployeeStatus
} from "./service";
import processSetting from "../../../../utils/processSetting";

function* allEmployeeStatuses() {
  yield processSetting({
    service: allEmployeeStatus,
    success: actionTypes.GET_ALL_EMPLOYEE_STATUSES_SUCCESS,
    failed: actionTypes.GET_ALL_EMPLOYEE_STATUSES_FAILED
  });
}

function* getEmployeeStatus({ filters }) {
  yield processSetting({
    params: filters,
    service: getAllEmployeeStatus,
    success: actionTypes.GET_EMPLOYEE_STATUSES_SUCCESS,
    failed: actionTypes.GET_EMPLOYEE_STATUSES_FAILED
  });
}

function* createStatus({ body }) {
  yield processSetting({
    params: body,
    service: createEmployeeStatus,
    success: actionTypes.CREATE_EMPLOYEE_STATUSES_SUCCESS,
    failed: actionTypes.CREATE_EMPLOYEE_STATUSES_FAILED
  });
}

function* updateStatus({ id, body }) {
  const actions = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: updateEmployeeStatus,
    success: actionTypes.UPDATE_EMPLOYEE_STATUSES_SUCCESS,
    failed: actionTypes.UPDATE_EMPLOYEE_STATUSES_FAILED
  });
}

function* deleteStatus({ id }) {
  const actions = Object.values({ id }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: deleteEmployeeStatus,
    success: actionTypes.DELETE_EMPLOYEE_STATUSES_SUCCESS,
    failed: actionTypes.DELETE_EMPLOYEE_STATUSES_FAILED
  });
}

function* watchEmployeeStatusesRequest() {
  yield all([
    takeEvery(actionTypes.GET_EMPLOYEE_STATUSES, getEmployeeStatus),
    takeEvery(actionTypes.CREATE_EMPLOYEE_STATUSES, createStatus),
    takeEvery(actionTypes.UPDATE_EMPLOYEE_STATUSES, updateStatus),
    takeEvery(actionTypes.DELETE_EMPLOYEE_STATUSES, deleteStatus),
    takeEvery(actionTypes.GET_ALL_EMPLOYEE_STATUSES, allEmployeeStatuses)
  ]);
}

export default [watchEmployeeStatusesRequest()];
