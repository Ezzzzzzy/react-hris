import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as memberActionCreators } from "../../reducer";
import { actionCreators as clientActionCreators } from "../../../clients/reducer";
import { actionCreators as branchActionCreators } from "../../../clients/pages/branches/reducer";
import { actionCreators as brandActionCreators } from "../../../settings/reducers/brands";
import { actionCreators as clientbrandActionCreators } from "../../../clients/reducer";
import { actionCreators as positionActionCreators } from "../../../settings/pages/positions/reducer";
import { actionCreators as employeeStatusActionCreators } from "../../../settings/pages/employee-statuses/reducer";
import { actionCreators as reasonsActionCreators } from "../../../settings/pages/leaving-reasons/reducer";

import Page from "./Page";

const mapStateToProps = state => {
  console.log(state.member.work)
  return {
    statuses: state.employeeStatus.data_all,
    statusLoading: state.employeeStatus.isLoading,
    branches: state.branch.data_all,
    branchLoading: state.branch.isLoading,
    brands: state.client.client_details.brands.data,
    clients: state.client.data_all,
    clientLoading: state.client.isLoading,
    member: state.member.profile,
    workHistory: state.member.work,
    actionType: state.member.actionType,
    memberLoading: state.member.isLoading,
    positions: state.position.data_all,
    positionLoading: state.position.isLoading,
    reasons: state.leavingReason.data_all,
    reasonLoading: state.profile.isLoading,
    user: state.profile.data,
    permissions: state.profile.permissions
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(memberActionCreators, dispatch),
  ...bindActionCreators(clientActionCreators, dispatch),
  ...bindActionCreators(brandActionCreators, dispatch),
  ...bindActionCreators(positionActionCreators, dispatch),
  ...bindActionCreators(clientbrandActionCreators, dispatch),
  ...bindActionCreators(branchActionCreators, dispatch),
  ...bindActionCreators(employeeStatusActionCreators, dispatch),
  ...bindActionCreators(reasonsActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
