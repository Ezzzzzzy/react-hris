import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as userActionCreators } from "../../../../reducers/users";
import { actionCreators as userGroupActionCreators } from "../../../../reducers/user-groups";
import { actionCreators as clientActionCreators } from "../../../../../clients/reducer";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    client: state.client.data_all,
    userGroup: state.userGroup.selected,
    userGroupClients: state.userGroup.selected.clients,
    actionType: state.userGroup.actionType,
    isLoading: state.userGroup.isLoading,
    permissions: state.profile.permissions
  }
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(userActionCreators, dispatch),
  ...bindActionCreators(clientActionCreators, dispatch),
  ...bindActionCreators(userGroupActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
