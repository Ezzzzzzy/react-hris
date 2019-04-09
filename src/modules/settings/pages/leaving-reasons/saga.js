import { all, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./reducer";
import {
  getReasons as getReasonsService,
  getAllReasons as getAllReasonsService,
  createReasons,
  updateReasons,
  deleteReasons
} from "./service";
import processSetting from "../../../../utils/processSetting";

function* getReasons({ filters }) {
  yield processSetting({
    params: filters,
    service: getReasonsService,
    success: actionTypes.GET_REASON_FOR_LEAVING_SUCCESS,
    failed: actionTypes.GET_REASON_FOR_LEAVING_FAILED
  });
}

function* getAllReasons({ filters }) {
  yield processSetting({
    params: filters,
    service: getAllReasonsService,
    success: actionTypes.GET_ALL_REASON_FOR_LEAVING_SUCCESS,
    failed: actionTypes.GET_ALL_REASON_FOR_LEAVING_FAILED
  });
}

function* createReason({ body }) {
  yield processSetting({
    params: body,
    service: createReasons,
    success: actionTypes.CREATE_REASON_FOR_LEAVING_SUCCESS,
    failed: actionTypes.CREATE_REASON_FOR_LEAVING_FAILED
  });
}

function* updateReason({ id, body }) {
  const action = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...action],
    service: updateReasons,
    success: actionTypes.UPDATE_REASON_FOR_LEAVING_SUCCESS,
    failed: actionTypes.UPDATE_REASON_FOR_LEAVING_FAILED
  });
}

function* deleteReason({ id }) {
  const action = Object.values({ id }).map(item => item);

  yield processSetting({
    params: [...action],
    service: deleteReasons,
    success: actionTypes.DELETE_REASON_FOR_LEAVING_SUCCESS,
    failed: actionTypes.DELETE_REASON_FOR_LEAVING_FAILED
  });
}

function* watchReasonsRequests() {
  yield all([
    takeEvery(actionTypes.GET_REASON_FOR_LEAVING, getReasons),
    takeEvery(actionTypes.GET_ALL_REASON_FOR_LEAVING, getAllReasons),
    takeEvery(actionTypes.CREATE_REASON_FOR_LEAVING, createReason),
    takeEvery(actionTypes.UPDATE_REASON_FOR_LEAVING, updateReason),
    takeEvery(actionTypes.DELETE_REASON_FOR_LEAVING, deleteReason)
  ]);
}

export default [watchReasonsRequests()];
