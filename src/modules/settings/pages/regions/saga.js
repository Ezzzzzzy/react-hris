import { all, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./reducer";
import {
  getRegions as getAllRegions,
  createRegions,
  updateRegions,
  deleteRegions,
  allRegions
} from "./service";
import processSetting from "../../../../utils/processSetting";

function* allRegion() {
  yield processSetting({
    service: allRegions,
    success: actionTypes.GET_ALL_REGIONS_SUCCESS,
    failed: actionTypes.GET_ALL_REGIONS_FAILED
  });
}

function* getRegions({ filters }) {
  yield processSetting({
    params: filters,
    service: getAllRegions,
    success: actionTypes.GET_REGIONS_SUCCESS,
    failed: actionTypes.GET_REGIONS_FAILED
  });
}

function* createRegion({ body }) {
  yield processSetting({
    params: body,
    service: createRegions,
    success: actionTypes.CREATE_REGIONS_SUCCESS,
    failed: actionTypes.CREATE_REGIONS_FAILED
  });
}

function* updateRegion({ id, body }) {
  const action = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...action],
    service: updateRegions,
    success: actionTypes.UPDATE_REGIONS_SUCCESS,
    failed: actionTypes.UPDATE_REGIONS_FAILED
  });
}

function* deleteRegion({ id }) {
  const action = Object.values({ id }).map(item => item);

  yield processSetting({
    params: [...action],
    service: deleteRegions,
    success: actionTypes.DELETE_REGIONS_SUCCESS,
    failed: actionTypes.DELETE_REGIONS_FAILED
  });
}

function* watchRegionRequests() {
  yield all([
    takeEvery(actionTypes.GET_REGIONS, getRegions),
    takeEvery(actionTypes.CREATE_REGIONS, createRegion),
    takeEvery(actionTypes.UPDATE_REGIONS, updateRegion),
    takeEvery(actionTypes.DELETE_REGIONS, deleteRegion),
    takeEvery(actionTypes.GET_ALL_REGIONS, allRegion)
  ]);
}

export default [watchRegionRequests()];
