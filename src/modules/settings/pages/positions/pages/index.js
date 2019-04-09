import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as statusActionCreators } from "../reducer";

import Page from "./Page";

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  positions: state.position.data,
  meta: state.position.meta,
  isLoading: state.position.isLoaing,
  user: state.profile.data
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(statusActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
