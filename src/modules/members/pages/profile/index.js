import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as memberActionCreators } from "../../reducer";

import Page from "./Page";

const mapStateToProps = state => ({
  profile: state.member.profile,
  isLoading: state.member.isLoading
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(memberActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
