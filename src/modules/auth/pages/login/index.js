import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as authActionCreators } from "../../reducer";
import { actionCreators as profileActionCreators } from "../../../profile/reducer";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
    isProfileLoading: state.profile.isLoading,
    errors: state.auth.errors,
    activateSuccess: state.auth.activateSuccess,
    forgotPasswordSuccess: state.auth.forgotPasswordSuccess,
    passwordChangeSuccess: state.auth.passwordChangeSuccess
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(authActionCreators, dispatch),
  ...bindActionCreators(profileActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
