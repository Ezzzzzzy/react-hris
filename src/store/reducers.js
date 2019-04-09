import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "../modules/auth/reducer";
import profile from "../modules/profile/reducer";
import member from "../modules/members/reducer";
import client from "../modules/clients/reducer";
import branch from "../modules/clients/pages/branches/reducer";
import employeeStatus from "../modules/settings/pages/employee-statuses/reducer";
import documentType from "../modules/settings/pages/document-types/reducer";
import leavingReason from "../modules/settings/pages/leaving-reasons/reducer";
import city from "../modules/settings/pages/cities/reducer";
import location from "../modules/settings/pages/branch-locations/reducer";
import position from "../modules/settings/pages/positions/reducer";
import tenureRange from "../modules/settings/pages/tenure-ranges/reducer";
import region from "../modules/settings/pages/regions/reducer";
import brand from "../modules/settings/reducers/brands";
import businessUnit from "../modules/settings/reducers/businessUnits";
import report from "../modules/reports/reducer";
import user from "../modules/users/reducers/users";
import userGroup from "../modules/users/reducers/user-groups";

const authPersistConfig = {
  key: "peopleserve_auth",
  storage
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  profile,
  member,
  client,
  branch,
  documentType,
  employeeStatus,
  leavingReason,
  city,
  location,
  position,
  region,
  report,
  tenureRange,
  businessUnit,
  brand,
  user,
  userGroup
});
