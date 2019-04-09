import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as memberActionCreators } from "../../reducer";
import { actionCreators as cityActionCreators } from "../../../settings/pages/cities/reducer";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    errors: state.member.errors,
    profile: state.member.profile,
    isLoading: state.member.isLoading,
    actionType: state.member.actionType,
    user: state.profile.data
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(memberActionCreators, dispatch),
  ...bindActionCreators(cityActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
