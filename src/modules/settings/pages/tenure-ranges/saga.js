import { all, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./reducer";
import {
  getTenureRange as getAllTenureRanges,
  createTenureRange,
  updateTenureRange,
  deleteTenureRange,
  allTenureRange
} from "./service";
import processSetting from "../../../../utils/processSetting";

function* getTenureRanges({ filters }) {
  yield processSetting({
    params: filters,
    service: getAllTenureRanges,
    success: actionTypes.GET_TENURE_RANGES_SUCCESS,
    failed: actionTypes.GET_TENURE_RANGES_FAILED
  });
}

function* createTenureRanges({ body }) {
  yield processSetting({
    params: body,
    service: createTenureRange,
    success: actionTypes.CREATE_TENURE_RANGES_SUCCESS,
    failed: actionTypes.CREATE_TENURE_RANGES_FAILED
  });
}

function* updateTenureRanges({ id, body }) {
  const actions = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: updateTenureRange,
    success: actionTypes.UPDATE_TENURE_RANGES_SUCCESS,
    failed: actionTypes.UPDATE_TENURE_RANGES_FAILED
  });
}

function* deleteTenureRanges({ id }) {
  const actions = Object.values({ id }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: deleteTenureRange,
    success: actionTypes.DELETE_TENURE_RANGES_SUCCESS,
    failed: actionTypes.DELETE_TENURE_RANGES_FAILED
  });
}

function* allTenureRanges() {
  yield processSetting({
    service: allTenureRange,
    success: actionTypes.GET_ALL_TENURE_RANGES_SUCCESS,
    failed: actionTypes.GET_ALL_TENURE_RANGES_FAILED
  });
}

function* watchTenureRangeRequests() {
  yield all([
    takeEvery(actionTypes.GET_TENURE_RANGES, getTenureRanges),
    takeEvery(actionTypes.CREATE_TENURE_RANGES, createTenureRanges),
    takeEvery(actionTypes.UPDATE_TENURE_RANGES, updateTenureRanges),
    takeEvery(actionTypes.DELETE_TENURE_RANGES, deleteTenureRanges),
    takeEvery(actionTypes.GET_ALL_TENURE_RANGES, allTenureRanges)
  ]);
}

export default [watchTenureRangeRequests()];
