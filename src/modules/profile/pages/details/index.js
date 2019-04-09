import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as profileActionCreators } from "../../reducer";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    authErrors: state.profile.errors,
    profile: state.profile.profile,
    isLoading: state.profile.isLoading
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(profileActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
