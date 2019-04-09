import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as userActionCreators } from "../../../../reducers/users";
import { actionCreators as userGroupActionCreators } from "../../../../reducers/user-groups";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.profile.data.name,
    userEmail: state.profile.data.email,
    users: state.user.data,
    users_meta: state.user.meta,
    userGroups: state.userGroup.data_all,
    isLoading: state.user.isLoading,
    toast: state.user.toast
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(userActionCreators, dispatch),
  ...bindActionCreators(userGroupActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
