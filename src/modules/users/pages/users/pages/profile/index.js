import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as userActionCreators } from "../../../../reducers/users";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userGroups: state.userGroup.data_all,
    userData: state.user.data_single,
    toast: state.user.toast,
    isLoading: state.user.isLoading,
    userId: state.profile.data.id
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(userActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
