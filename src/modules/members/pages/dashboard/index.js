import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as memberActionCreators } from "../../reducer";
import { actionCreators as reasonsActionCreators } from "../../../settings/pages/leaving-reasons/reducer";
import { actionCreators as employeeStatusActionCreators } from "../../../settings/pages/employee-statuses/reducer";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    member: state.member.profile,
    workHistory: state.member.work,
    documents: state.member.documents,
    documentTypes: state.member.documentTypes,
    isLoading: state.member.isLoading,
    actionType: state.member.actionType,
    reasons: state.leavingReason.data_all,
    statuses: state.employeeStatus.data_all,
    user: state.profile.data,
    permissions: state.profile.permissions
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(memberActionCreators, dispatch),
  ...bindActionCreators(reasonsActionCreators, dispatch),
  ...bindActionCreators(employeeStatusActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
