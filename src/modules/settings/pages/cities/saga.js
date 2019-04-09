import { all, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./reducer";
import {
  getCity as getAllCities,
  createCity,
  updateCity,
  deleteCity,
  allCity
} from "./service";
import processSetting from "../../../../utils/processSetting";

function* allCities() {
  yield processSetting({
    service: allCity,
    success: actionTypes.GET_ALL_CITIES_SUCCESS,
    failed: actionTypes.GET_ALL_CITIES_FAILED
  });
}

function* getCities({ filters }) {
  yield processSetting({
    params: filters,
    service: getAllCities,
    success: actionTypes.GET_CITIES_SUCCESS,
    failed: actionTypes.GET_CITIES_FAILED
  });
}

function* createCities({ body }) {
  yield processSetting({
    params: body,
    service: createCity,
    success: actionTypes.CREATE_CITIES_SUCCESS,
    failed: actionTypes.CREATE_CITIES_FAILED
  });
}

function* updateCities({ id, body }) {
  const actions = Object.values({ id, body }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: updateCity,
    success: actionTypes.UPDATE_CITIES_SUCCESS,
    failed: actionTypes.UPDATE_CITIES_FAILED
  });
}

function* deleteCities({ id }) {
  const actions = Object.values({ id }).map(item => item);

  yield processSetting({
    params: [...actions],
    service: deleteCity,
    success: actionTypes.DELETE_CITIES_SUCCESS,
    failed: actionTypes.DELETE_CITIES_FAILED
  });
}

function* watchCitiesRequests() {
  yield all([
    takeEvery(actionTypes.GET_CITIES, getCities),
    takeEvery(actionTypes.CREATE_CITIES, createCities),
    takeEvery(actionTypes.UPDATE_CITIES, updateCities),
    takeEvery(actionTypes.DELETE_CITIES, deleteCities),
    takeEvery(actionTypes.GET_ALL_CITIES, allCities)
  ]);
}

export default [watchCitiesRequests()];
