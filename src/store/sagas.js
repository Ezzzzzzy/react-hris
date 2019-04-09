import { all } from "redux-saga/effects";
import authSagas from "../modules/auth/saga";
import profileSagas from "../modules/profile/saga";
import memberSagas from "../modules/members/saga";
import clientSagas from "../modules/clients/saga";
import employeeStatusSagas from "../modules/settings/pages/employee-statuses/saga";
import businessUnitSettingSagas from "../modules/settings/sagas/businessUnits";
import brandSettingSagas from "../modules/settings/sagas/brands";
import branchSagas from "../modules/clients/pages/branches/saga";
import documentTypeSagas from "../modules/settings/pages/document-types/saga";
import leavingReasonSagas from "../modules/settings/pages/leaving-reasons/saga";
import regionSagas from "../modules/settings/pages/regions/saga";
import citySagas from "../modules/settings/pages/cities/saga";
import locationSagas from "../modules/settings/pages/branch-locations/saga";
import positionSagas from "../modules/settings/pages/positions/saga";
import tenureRangeSagas from "../modules/settings/pages/tenure-ranges/saga";
import userSagas from "../modules/users/sagas/users";
import userGroupSagas from "../modules/users/sagas/user-groups";
import reportSagas from "../modules/reports/saga";

export default function* rootSaga() {
  yield all([
    ...authSagas,
    ...profileSagas,
    ...memberSagas,
    ...clientSagas,
    ...branchSagas,
    ...employeeStatusSagas,
    ...documentTypeSagas,
    ...leavingReasonSagas,
    ...locationSagas,
    ...positionSagas,
    ...tenureRangeSagas,
    ...reportSagas,
    ...citySagas,
    ...regionSagas,
    ...businessUnitSettingSagas,
    ...brandSettingSagas,
    ...userSagas,
    ...userGroupSagas
  ]);
}
