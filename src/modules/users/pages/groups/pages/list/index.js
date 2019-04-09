import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as userActionCreators } from "../../../../reducers/users";
import { actionCreators as userGroupActionCreators } from "../../../../reducers/user-groups";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userGroups: state.userGroup.data,
    total: state.userGroup.data_all,
    meta: state.userGroup.meta,
    isLoading: state.userGroup.isLoading,
    isUserLoading: state.user.isLoading,
    actionType: state.user.actionType,
    permissions: state.profile.permissions,
    user: state.profile.data.name,
    toast: state.user.toast
  }
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(userGroupActionCreators, dispatch),
  ...bindActionCreators(userActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
