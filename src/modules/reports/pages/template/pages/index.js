import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as reportActionCreators } from "../../../reducer";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    reports: state.report.data,
    meta: state.report.meta,
    downloadLink: state.report.downloadLink,
    links: state.report.links,
    errors: state.report.errors,
    isLoading: state.report.isLoading,
    toast: state.report.toast
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(reportActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
