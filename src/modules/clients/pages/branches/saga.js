import { all, takeEvery } from "redux-saga/effects";
import { actionTypes } from "./reducer";
import { getAllBranchesByBrands as getAllBranchesByBrandsService } from "./service";
import processAction from "../../../../utils/processAction";

function* getAllBranchesByBrands({ client_id, brand_id }) {
  yield processAction({
    params: { client_id, brand_id },
    service: getAllBranchesByBrandsService,
    success: actionTypes.GET_BRANCHES_BY_BRANDS_SUCCESS,
    failed: actionTypes.GET_BRANCHES_BY_BRANDS_FAILED
  });
}

function* watchBranchesRequests() {
  yield all([
    takeEvery(actionTypes.GET_BRANCHES_BY_BRANDS, getAllBranchesByBrands)
  ]);
}

export default [watchBranchesRequests()];
