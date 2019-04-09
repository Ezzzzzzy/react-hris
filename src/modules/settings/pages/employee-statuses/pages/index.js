import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as statusActionCreators } from "../reducer";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    employeeStatuses: state.employeeStatus.data,
    meta: state.employeeStatus.meta,
    isLoading: state.employeeStatus.isLoading,
    user: state.profile.data
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(statusActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
