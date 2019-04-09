import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as typeActionCreators } from "../reducer";

import Page from "./Page";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    documentTypes: state.documentType.data,
    meta: state.documentType.meta,
    isLoading: state.documentType.isLoading,
    user: state.profile.data
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(typeActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
