import { all, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./reducer";
import {
  getLocation as getAllLocations,
  createLocation,
  updateLocation,
  deleteLocation,
  allLocation
} from "./service";
import processSetting from "../../../../utils/processSetting";

function* allLocations() {
  yield processSetting({
    service: allLocation,
    success: actionTypes.GET_ALL_LOCATIONS_SUCCESS,
    failed: actionTypes.GET_ALL_LOCATIONS_FAILED
  });
}

function* getLocations({ filters }) {
  yield processSetting({
    params: filters,
    service: getAllLocations,
    success: actionTypes.GET_LOCATIONS_SUCCESS,
    failed: actionTypes.GET_LOCATIONS_FAILED
  });
}

function* createLocations({ body }) {
  yield processSetting({
    params: body,
    service: createLocation,
    success: actionTypes.CREATE_LOCATIONS_SUCCESS,
    failed: actionTypes.CREATE_LOCATIONS_FAILED
  });
}

function* updateLocations({ id, body }) {
  const actions = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: updateLocation,
    success: actionTypes.UPDATE_LOCATIONS_SUCCESS,
    failed: actionTypes.UPDATE_LOCATIONS_FAILED
  });
}

function* deleteLocations({ id }) {
  const actions = Object.values({ id }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: deleteLocation,
    success: actionTypes.DELETE_LOCATIONS_SUCCESS,
    failed: actionTypes.DELETE_LOCATIONS_FAILED
  });
}

function* watchLocationRequests() {
  yield all([
    takeEvery(actionTypes.GET_LOCATIONS, getLocations),
    takeEvery(actionTypes.CREATE_LOCATIONS, createLocations),
    takeEvery(actionTypes.UPDATE_LOCATIONS, updateLocations),
    takeEvery(actionTypes.DELETE_LOCATIONS, deleteLocations),
    takeEvery(actionTypes.GET_ALL_LOCATIONS, allLocations)
  ]);
}

export default [watchLocationRequests()];
