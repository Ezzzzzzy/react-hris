import { call, put, takeEvery } from "redux-saga/effects";
import { actionTypes } from "../reducers/leavingReason";
import {
  getLeavingReasons as getAllLeavingReasons,
  createLeavingReason,
  updateLeavingReason
} from "../service";
import { message } from "antd";

function* getLeavingReason(action) {
  const { filters } = action;

  try {
    const leavingReasons = yield call(getAllLeavingReasons, filters);
    yield put({
      type: actionTypes.GET_LEAVING_REASONS_SUCCESS,
      leavingReasons
    });
    message.success("Successfully get all leaving reasons");
  } catch (err) {
    const error = err.message || err;
    yield put({ type: actionTypes.GET_LEAVING_REASONS_FAILED, error });
    message.error("Failed to get leaving reasons");
  }
}

function* createReason(action) {
  const { LeavingReason } = action;

  try {
    const newType = yield call(createLeavingReason, LeavingReason);
    yield put({
      type: actionTypes.CREATE_LEAVING_REASONS_SUCCESS,
      newType
    });
  } catch (err) {
    const error = err.message || err;
    yield put({ type: actionTypes.CREATE_LEAVING_REASONS_FAILED, error });
  }
}

function* updateReason(action) {
  try {
    const { leavingReasonId, leavingReason } = action;

    const updatedType = yield call(
      updateLeavingReason,
      leavingReasonId,
      leavingReason
    );

    yield put({
      type: actionTypes.UPDATE_LEAVING_REASONS_SUCCESS,
      updatedType
    });
    message.success("Successfully updated type");
  } catch (err) {
    const error = err.message || err;
    yield put({ type: actionTypes.UPDATE_LEAVING_REASONS_FAILED, error });

    message.error("Failed to update type");
  }
}

function* watchGetLeavingReasonsRequest() {
  yield takeEvery(actionTypes.GET_LEAVING_REASONS, getLeavingReason);
}

function* watchCreateLeavingReasonRequest() {
  yield takeEvery(actionTypes.CREATE_LEAVING_REASONS, createReason);
}

function* watchUpdateLeavingReasonRequest() {
  yield takeEvery(actionTypes.UPDATE_LEAVING_REASONS, updateReason);
}

export default [
  watchGetLeavingReasonsRequest(),
  watchCreateLeavingReasonRequest(),
  watchUpdateLeavingReasonRequest()
];
