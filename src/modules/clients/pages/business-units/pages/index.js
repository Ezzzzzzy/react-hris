import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as clientActionCreators } from "../../../reducer";

import Page from "./Page";

const mapStateToProps = state => ({
  client_details: state.client.client_details.data,
  business_units: state.client.client_details.business_units,
  business_units_all: state.client.client_details.business_units.data_all,
  toast: state.client.toast,
  isLoading: state.client.isLoading,
  user: state.profile.data,
  permissions: state.profile.permissions
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(clientActionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
