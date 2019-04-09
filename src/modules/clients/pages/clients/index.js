import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as clientActionCreators } from "../../reducer";

import Page from "./Page";

const mapStateToProps = state => ({
  clients: state.client.data,
  meta: state.client.meta,
  links: state.client.links,
  toast: state.client.toast,
  isLoading: state.client.isLoading,
  user: state.profile.data,
  allowedClients: state.profile.client,
  permissions: state.profile.permissions
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(clientActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
