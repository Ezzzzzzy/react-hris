import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as reasonActionCreators } from "../reducer";

import Page from "./Page";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  regions: state.region.data,
  meta: state.region.meta,
  isLoading: state.region.isLoading,
  user: state.profile.data
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(reasonActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
