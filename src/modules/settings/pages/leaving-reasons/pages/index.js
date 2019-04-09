import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as statusActionCreators } from "../reducer";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    leavingReasons: state.leavingReason.data,
    meta: state.leavingReason.meta,
    isLoading: state.leavingReason.isLoading,
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
