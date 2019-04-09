import { all, takeEvery } from "redux-saga/effects";
import { actionTypes } from "../reducers/brands";
import { allBrand } from "../service";
import processSetting from "../../../utils/processSetting";

function* allBrands() {
  yield processSetting({
    service: allBrand,
    success: actionTypes.GET_ALL_BRANDS_SUCCESS,
    failed: actionTypes.GET_ALL_BRANDS_FAILED
  });
}

function* watchBrandRequest() {
  yield all([takeEvery(actionTypes.GET_ALL_BRANDS, allBrands)]);
}

export default [watchBrandRequest()];
