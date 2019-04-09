import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as memberActionCreators } from "../../reducer";

import Page from "./Page";

const mapStateToProps = state => ({
  actionType: state.member.actionType,
  isLoading: state.member.isLoading,
  user: state.profile.data,
  permissions: state.profile.permissions
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(memberActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
