import { all, takeEvery } from "redux-saga/effects";
import { actionTypes as businessUnitActionTypes } from "../reducers/businessUnits";
import { allBusinessUnits as allBusinessUnitsService } from "../service";
import processAction from "../../../utils/processAction";

function* getAllBusinessUnits() {
    yield processAction({
        service: allBusinessUnitsService,
        success: businessUnitActionTypes.GET_ALL_BUSINESS_UNITS_SUCCESS,
        failed: businessUnitActionTypes.GET_ALL_BUSINESS_UNITS_FAILED
    });
}

function* watchGetAllBu() {
    yield all([
        takeEvery(businessUnitActionTypes.GET_ALL_BUSINESS_UNITS, getAllBusinessUnits)
    ]);
}

export default [watchGetAllBu()]