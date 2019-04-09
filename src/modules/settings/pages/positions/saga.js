import { all, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./reducer";
import {
  getPosition as getAllPosition,
  createPosition,
  updatePosition,
  deletePosition,
  allPosition
} from "./service";
import processSetting from "../../../../utils/processSetting";

function* allPositions() {
  yield processSetting({
    service: allPosition,
    success: actionTypes.GET_ALL_POSITIONS_SUCCESS,
    failed: actionTypes.GET_ALL_POSITIONS_FAILED
  });
}

function* getPositions({ filters }) {
  yield processSetting({
    params: filters,
    service: getAllPosition,
    success: actionTypes.GET_POSITIONS_SUCCESS,
    failed: actionTypes.GET_POSITIONS_FAILED
  });
}

function* createPositions({ body }) {
  yield processSetting({
    params: body,
    service: createPosition,
    success: actionTypes.CREATE_POSITIONS_SUCCESS,
    failed: actionTypes.CREATE_POSITIONS_FAILED
  });
}

function* updatePositions({ id, body }) {
  const action = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...action],
    service: updatePosition,
    success: actionTypes.UPDATE_POSITIONS_SUCCESS,
    failed: actionTypes.UPDATE_POSITIONS_FAILED
  });
}

function* deletePositions({ id }) {
  const action = Object.values({ id }).map(item => item);

  yield processSetting({
    params: [...action],
    service: deletePosition,
    success: actionTypes.DELETE_POSITIONS_SUCCESS,
    failed: actionTypes.DELETE_POSITIONS_FAILED
  });
}

function* watchPositionsRequests() {
  yield all([
    takeEvery(actionTypes.GET_POSITIONS, getPositions),
    takeEvery(actionTypes.CREATE_POSITIONS, createPositions),
    takeEvery(actionTypes.UPDATE_POSITIONS, updatePositions),
    takeEvery(actionTypes.DELETE_POSITIONS, deletePositions),
    takeEvery(actionTypes.GET_ALL_POSITIONS, allPositions)
  ]);
}

export default [watchPositionsRequests()];
