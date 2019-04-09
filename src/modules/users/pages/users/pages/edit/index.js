import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as userActionCreators } from "../../../../reducers/users";
import { actionCreators as authActionCreators } from "../../../../../auth/reducer";

import Page from "./Page";

const mapStateToProps = state => {
  console.log(state.user)
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userGroups: state.userGroup.data_all,
    userData: state.user.data_single,
    // userData: state.user.data,
    toast: state.user.toast,
    admin_email: state.profile.data.email,
    userId: state.profile.data.id
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(userActionCreators, dispatch),
  ...bindActionCreators(authActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
