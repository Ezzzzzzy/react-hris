import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as memberActionCreators } from "../../reducer";
import { actionCreators as statusActionCreators } from "../../../settings/pages/employee-statuses/reducer";
import { actionCreators as positionActionCreators } from "../../../settings/pages/positions/reducer";
import { actionCreators as locationActionCreators } from "../../../settings/pages/branch-locations/reducer";
import { actionCreators as tenureActionCreators } from "../../../settings/pages/tenure-ranges/reducer";
import { actionCreators as brandActionCreators } from "../../../settings/reducers/brands";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    members: state.member.data,
    meta: state.member.meta,
    uploadSuccessMessage: state.member.uploadSuccess,
    uploadErrorMessage: state.member.uploadError,
    isMemberLoading: state.member.isLoading,
    statuses: state.employeeStatus.data_all,
    positions: state.position.data_all,
    isPositionLoading: state.position.isLoading,
    locations: state.location.data_all,
    tenureRanges: state.tenureRange.data_all,
    brands: state.brand.data,
    permissions: state.profile.permissions
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(memberActionCreators, dispatch),
  ...bindActionCreators(statusActionCreators, dispatch),
  ...bindActionCreators(positionActionCreators, dispatch),
  ...bindActionCreators(locationActionCreators, dispatch),
  ...bindActionCreators(tenureActionCreators, dispatch),
  ...bindActionCreators(brandActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
