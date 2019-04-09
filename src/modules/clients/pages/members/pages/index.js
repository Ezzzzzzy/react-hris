import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as clientActionCreators } from "../../../reducer";
import { actionCreators as branchActionCreators } from "../../../../clients/pages/branches/reducer";
import { actionCreators as brandActionCreators } from "../../../../settings/reducers/brands";
import { actionCreators as levingReasonsActionCreators } from "../../../../settings/pages/leaving-reasons/reducer";
import { actionCreators as employeeStatusActionCreators } from "../../../../settings/pages/employee-statuses/reducer";
import { actionCreators as positionsActionCreators } from "../../../../settings/pages/positions/reducer";
import { actionCreators as locationsActionCreators } from "../../../../settings/pages/branch-locations/reducer";

import Page from "./Page";

const mapStateToProps = state => ({
  clients_all: state.client.data_all,
  client_details: state.client.client_details.data,
  members: state.client.client_details.members,
  business_units_all: state.client.client_details.business_units.data_all,
  brands_all: state.client.client_details.brands.data_all,
  branchOptions: state.branch.data_all,
  leavingReasons: state.leavingReason.data_all,
  employeeStatus: state.employeeStatus.data_all,
  positions: state.position.data_all,
  locations: state.location.data_all,
  isLoading: state.client.isLoading,
  toast: state.client.toast,
  permissions: state.profile.permissions,
  user: state.profile.data
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(clientActionCreators, dispatch),
  ...bindActionCreators(levingReasonsActionCreators, dispatch),
  ...bindActionCreators(employeeStatusActionCreators, dispatch),
  ...bindActionCreators(positionsActionCreators, dispatch),
  ...bindActionCreators(locationsActionCreators, dispatch),
  ...bindActionCreators(brandActionCreators, dispatch),
  ...bindActionCreators(branchActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
