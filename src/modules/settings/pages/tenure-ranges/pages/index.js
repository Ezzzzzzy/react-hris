import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as tenureActionCreators } from "../reducer";

import Page from "./Page";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  tenureRanges: state.tenureRange.data,
  meta: state.tenureRange.meta,
  isLoading: state.tenureRange.isLoading
});
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(tenureActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
